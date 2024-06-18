import { doc, updateDoc, setDoc, getDoc, deleteField } from 'firebase/firestore'
import { useMainStore } from '@/modules/core/stores/main'
import { useToast } from 'vue-toastification'
import { db } from '@/firebase'
import { v4 as uuidv4 } from 'uuid'

import { useAuthStore } from '@/modules/header/stores'
import { useOrdersStore } from '@/modules/customer/stores'
import { useLocationStore } from '@/modules/location/stores'

const toast = useToast()

export const actions = {
  // Открытие/закрытие модалки
  toggleModal() {
    const mainStore = useMainStore()

    this.isModalOpened = !this.isModalOpened

    if (this.isModalOpened) {
      mainStore.disableScroll()
    } else {
      mainStore.enableScroll()
    }
  },
  // Запрос корзины
  async fetchCart() {
    const authStore = useAuthStore()
    const userId = authStore.user.uid
    try {
      const res = await getDoc(doc(db, 'users', userId))

      if (res.exists() && res.data().cart) {
        for (const key in res.data().cart) {
          this.items.set(key, res.data().cart[key])
        }

        this.totalCount = this.items.size
        this.updateLocalStorageCart()
      }
    } catch (error) {
      console.error(error)
      toast.error('Не удалось получить данные корзины')
    }
  },
  // Добавление товара в корзину
  async addToCart(productId) {
    const authStore = useAuthStore()
    const userId = authStore.user.uid
    const productInternal = await this.fetchProductById(productId)
    const selectedProductConfigInternal = this.itemConfiguration

    const hasSelectedConfig = Object.values(selectedProductConfigInternal).reduce((acc, value) => acc + Number(!!value), 0)
    try {
      if (!hasSelectedConfig) {
        throw new Error('Вы не выбрали конфигурацию товара')
      }

      this.isCartPending = true
      if (this.items.has(productId)) {
        const prevState = this.items.get(productId)
        this.items.delete(productId)

        await updateDoc(doc(db, 'users', userId), {
          [`cart.${productId}.amount`]: prevState.amount + 1
        })

        this.items.set(productId, { ...productInternal, amount: prevState.amount + 1})
      
      } else {
        await setDoc(doc(db, 'users', userId), {
          cart: {
            [productId]: { ...productInternal, amount: 1, selectedConfiguration: selectedProductConfigInternal }
          }
        }, { merge: true })

        this.items.set(productId, {...productInternal, amount: 1, selectedConfiguration: selectedProductConfigInternal})
        this.totalCount += 1
      }

      // Добавление в локал сторадж
      this.updateLocalStorageCart()

      toast.success('Товар успешно добавлен в корзину')
    } catch (error) {
      console.error(error.message)
      toast.error(error.message)
    }
    finally {
      this.isCartPending = false
    }
  },
  // Уменьшение кол-ва товаров в корзине
  async removeItemById(productId) {
    const authStore = useAuthStore()
    const userId = authStore.user.uid

    try {
      this.isCartPending = true
      const productInternal = this.items.get(productId)
      const productAmount = productInternal.amount

      this.items.delete(productId)
      
      if (productAmount > 1) {
        await updateDoc(doc(db, 'users', userId), {
          [`cart.${productId}.amount`]: productAmount - 1
        })

        this.items.set(productId, { ...productInternal, amount: productAmount - 1 })
        this.updateLocalStorageCart()

        toast.success('Товар успешно удален из корзины')
      } else {
        this.deleteFromCart(productId)
      }
    }
    catch (error) {
      toast.error('Не удалось удалить товар из корзины')
    }
    finally {
      this.isCartPending = false
    }
  },
  // Удаление товара из корзины
  async deleteFromCart(productId) {
    const authStore = useAuthStore()
    const userId = authStore.user.uid

    try {
      await updateDoc(doc(db, 'users', userId), {
        [`cart.${productId}`]: deleteField()
      })

      this.totalCount -= 1
      this.items.delete(productId)
      this.updateLocalStorageCart()

      toast.success('Товар удален из корзины')
    } catch (error) {
      toast.error(`Не удалось удалить товар из корзины: ${error.message}`)
    }
  },
  // Получение товара из бд для корзины
  async fetchProductById(productId) {
    const authStore = useAuthStore()
    const userId = authStore.user.uid
    try {

      if (this.items.has(productId)) {
        const res = await getDoc(doc(db, 'users', userId))
        
        if (!res.exists()) {
          throw new Error('Не удалось добавить товар в корзину.\nТовар закончился')
        }

        return res.data().cart[productId]
      }

      const response = await getDoc(doc(db, 'products', productId))

      return response.data()
    } catch (error) {
      toast.error(error.message)
    }
  },
  // Конвертация товаров корзины в локал сторадж
  setCartToLocalStorage(cart) {
    const cartFormatted = {}
    for (const [key, value] of cart.entries()) {
      cartFormatted[key] = value
    }

    return cartFormatted
  },
  // Конвертация товаров из локал стораджа в корзину
  getCartFromLocalStorage() {
    const cart = JSON.parse(localStorage.getItem('user'))?.cart
    const cartFormatted = new Map()

    for (const key in cart) {
      cartFormatted.set(key, cart[key])
    }

    return cartFormatted
  },
  // Обновление корзины в локал сторадже
  updateLocalStorageCart() {
    const userFromStorage = JSON.parse(localStorage.getItem('user'))
      
    localStorage.setItem('user', JSON.stringify({...userFromStorage, cart: this.setCartToLocalStorage(this.items) }))
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
    const authStore = useAuthStore()
    const ordersStore = useOrdersStore()
    const locationStore = useLocationStore()

    const deliveryAddress = locationStore.deliveryAddress

    if (!deliveryAddress) {
      this.toggleModal()
      locationStore.toggleLocationModal()
      return
    }

    const userId = authStore.user.uid
    try {
      if (!this.items.size) {
        throw new Error('Невозможно создать заказ! Корзина пуста.')
      }

      const userData = await getDoc(doc(db, 'users', userId))

      const orderId = uuidv4()
      const order = {
        id: orderId,
        orderTotal: 0,
        deliveryDate: Date.now() + (24 * 3600 * 1000),
        items: [],
        address: deliveryAddress,
      }
      let orderTotal = 0

      for (const [key, value] of Object.entries(userData.data().cart)) {
        order.items.push({ id: key, ...value })
        
        orderTotal += Number(value.prices.current) * value.amount
      }

      order.orderTotal = orderTotal

      await setDoc(doc(db, 'users', userId), {
        orders: {
          [orderId]: order
        }
      }, { merge: true })

      this.clearCart()
      ordersStore.setOrder(order)

      toast.success('Заказ успешно создан')
      
    } catch(error) {
      toast.error(error.message)
    }
  },
  // Очистка корзины
  async clearCart() {
    const authStore = useAuthStore()
    const userId = authStore.user.uid
    try {
      await updateDoc(doc(db, 'users', userId), {
        cart: deleteField()
      })

      this.items = new Map()
      this.updateLocalStorageCart()
      this.totalCount = 0
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