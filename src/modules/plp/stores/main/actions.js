import { getDocs, collection, where, query } from 'firebase/firestore'
import { db } from '@/firebase'

export const actions = {
  async fetchProductsByCategory(category) {
    try {
      const q = query(collection(db, 'products'), where('category', '==', category))
      const res = await getDocs(q)

      const dataFormatted = res.docs.map((product) => {
        if (!product.exists()) {
          return
        }

        return {
          ...product.data(),
          id: product.id
        }
      })

      this.products = dataFormatted
    } catch (error) {
      console.error('Не удалось получить товары по категории', category, '\n', error.message)
    }
  }
}