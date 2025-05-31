import { useToast } from 'vue-toastification'
import { Api } from '@/api'

const toast = useToast()
const api = new Api()

export const actions = {
  async toggleWishList(productId) {
    try {
      const productIndex = this.products.findIndex((product) => product.id === productId)

      if (productIndex > -1) {
        await api.delete('favorites/delete', {body: {productId}, credentials: 'include'})

        this.products.splice(productIndex, 1)

        toast.success('Товар успешно удален из избранного')
      } else {
        const { data } = await api.post('favorites/add', {body: {productId}, credentials: 'include'})

        this.products.push(data)

        toast.success('Товар успешно добавлен в избранное')
      }
    } catch (error) {
      toast.error(error.message)
    }
  },
  async fetchWishlist() {
    try {
      this.isPending = true

      const { data } = await api.get('favorites/listing', {credentials: 'include'})
      
      this.products = data.products
    } catch (error) {
      toast.error(error.message)
    }
    finally {
      this.isPending = false
    }
  }
}