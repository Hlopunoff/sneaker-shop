import { useMainStore } from '@/modules/core/stores/main'
import { useToast } from 'vue-toastification'
import { useLocationStore } from '@/modules/location/stores'
import { Api } from '@/api'

const toast = useToast()
const api = new Api()

export const actions = {
  // Открытие/закрытие модалки
  async toggleModal() {
    const mainStore = useMainStore()

    if (!this.isModalOpened) {
      await this.fetchCart()
    }

    this.isModalOpened = !this.isModalOpened

    if (this.isModalOpened) {
      mainStore.disableScroll()
    } else {
      mainStore.enableScroll()
    }
  },
  // Запрос корзины
  async fetchCart() {
    try {
      const {data} = await api.get('cart/listing', {credentials: 'include'})

      this.totalCount = data.totalItems
      this.items = data.cart
      this.updateLocalStorageCart()
      
    } catch (error) {
      console.error(error)
      toast.error('Не удалось получить данные корзины')
    }
  },
  // Добавление товара в корзину
  async addToCart(productId) {
    const selectedProductConfigInternal = this.itemConfiguration

    const hasSelectedConfig = Object.values(selectedProductConfigInternal).reduce((acc, value) => acc + Number(!!value), 0)
    try {
      if (hasSelectedConfig < 2) {
        throw new Error('Вы не выбрали конфигурацию товара')
      }

      this.isCartPending = true
      
      const { data } = await api.patch('cart/item/add', {
        body: {
          productId,
          selectedConfiguration: selectedProductConfigInternal
        },
        credentials: 'include',
      })

      const cartItemIndex = this.items.findIndex((item) => (
        item.id === productId &&
        item.selectedConfiguration.size === selectedProductConfigInternal.size &&
        item.selectedConfiguration.color === selectedProductConfigInternal.color
      ))

      if (cartItemIndex > -1) {
        this.items[cartItemIndex].amount += 1
      } else {
        this.items.push(data)
      }

      this.totalCount = this.items.length

      // Добавление в локал сторадж
      this.updateLocalStorageCart()

      toast.success('Товар успешно добавлен в корзину')
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
    finally {
      this.isCartPending = false
      this.resetSelectedProductConfiguration()
    }
  },
  // Уменьшение кол-ва товаров в корзине
  async removeItemById(productId) {
    const selectedProductConfigInternal = this.itemConfiguration
    try {

      this.isCartPending = true

      const { data } = await api.patch('cart/item/remove', {
        credentials: 'include',
        body: {
          productId,
          selectedConfiguration: selectedProductConfigInternal,
        }
      })

      const cartItemIndex = this.items.findIndex((item) => (
        item.id === productId &&
        item.selectedConfiguration.size === selectedProductConfigInternal.size &&
        item.selectedConfiguration.color === selectedProductConfigInternal.color
      ))

      if (cartItemIndex < 0) {
        throw new Error('Данного товара нет в корзине')
      }

      if (data.amount > 0) {
        this.items[cartItemIndex].amount -= 1
      } else {
        this.items.splice(cartItemIndex, 1)
      }

      this.totalCount = this.items.length

      // Добавление в локал сторадж
      this.updateLocalStorageCart()

      toast.success('Товар успешно удален из корзины')
    }
    catch (error) {
      console.log('actions.js	🚀	', error)
      
      toast.error('Не удалось удалить товар из корзины')
    }
    finally {
      this.isCartPending = false
      this.resetSelectedProductConfiguration()
    }
  },
  // Удаление товара из корзины
  async deleteFromCart(productId) {
    const selectedProductConfigInternal = this.itemConfiguration

    try {
      await api.delete('cart/item/delete', {
        credentials: 'include',
        body: {
          productId,
          selectedConfiguration: selectedProductConfigInternal,
        }
      })

      const cartItemIndex = this.items.findIndex((item) => (
        item.id === productId &&
        item.selectedConfiguration.size === selectedProductConfigInternal.size &&
        item.selectedConfiguration.color === selectedProductConfigInternal.color
      ))

      if (cartItemIndex < 0) {
        throw new Error('Данного товара нет в корзине')
      }

      this.totalCount -= 1
      this.items.splice(cartItemIndex, 1)

      this.updateLocalStorageCart()

      toast.success('Товар удален из корзины')
    } catch (error) {
      toast.error(`Не удалось удалить товар из корзины: ${error.message}`)
    }
  },
  // Конвертация товаров из локал стораджа в корзину
  getCartFromLocalStorage() {
    const cart = JSON.parse(localStorage.getItem('cart'))

    return cart
  },
  // Обновление корзины в локал сторадже
  updateLocalStorageCart() {
    localStorage.setItem('cart', JSON.stringify({ items: this.items, totalCount: this.totalCount }))
  },
  /**
   * Выбор конфигурации (размер,цвет и тд) товара
   * @param {('size' | 'color')} param Поле в сторе itemConfiguration
   * @param {string} value выбранное значение
   */
  selectItemConfig(param, value) {
    this.itemConfiguration[param] = value
  },
  // Создание заказа
  async createOrder() {
    const locationStore = useLocationStore()

    const deliveryAddress = locationStore.deliveryAddress

    if (!deliveryAddress) {
      this.toggleModal()
      locationStore.toggleLocationModal()
      return
    }

    try {
      if (!this.items.length) {
        throw new Error('Невозможно создать заказ! Корзина пуста.')
      }

      const orderData = {
        deliveryDate: `${Date.now() + (24 * 3600 * 1000)}`,
        items: [],
        address: deliveryAddress,
      }

      this.items.forEach((cartItem) => {
        orderData.items.push({
          productId: cartItem.id,
          amount: cartItem.amount,
          selectedConfiguration: cartItem.selectedConfiguration,
        })
      })

      await api.post('customer/order', {
        credentials: 'include',
        body: orderData,
      })

      this.clearCart()

      toast.success('Заказ успешно создан')
      
    } catch(error) {
      toast.error(error.message)
    }
  },
  // Очистка корзины
  async clearCart() {
    try {
      await api.delete('cart/listing', {credentials: 'include'})

      this.items = []
      this.totalCount = 0
      this.updateLocalStorageCart()
    } catch (error) {
      toast.error(error.message)
    }
  },
  // Ресет выбранных параметров продукта
  resetSelectedProductConfiguration() {
    for (const key in this.itemConfiguration) {
      this.itemConfiguration[key] = ''
    }
  }
}