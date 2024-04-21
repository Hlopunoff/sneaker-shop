import { getDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'

export const actions = {
  async fetchProduct(id) {
    try {
      const res = await getDoc(doc(db, 'products', id))
      
      if (!res.exists()) {
        throw new Error(`Продукта с таким id не существует: ${id}`)
      }

      const dataFormatted = {
        ...res.data(),
        id: res.id,
      }

      this.product = dataFormatted
    } catch (error) {
      console.error(`Не удалось получить продукт по этому id: ${id}\n${error.message}`)
    }
  }
}