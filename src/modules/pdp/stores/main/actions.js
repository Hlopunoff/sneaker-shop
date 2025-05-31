import { Api } from '@/api'

const api = new Api()

export const actions = {
  async fetchProduct(id) {
    try {
      const {data} = await api.get(`product/${id}`)

      this.product = data
    } catch (error) {
      console.error(`Не удалось получить продукт по этому id: ${id}\n${error.message}`)
    }
  }
}