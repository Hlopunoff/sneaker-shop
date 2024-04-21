import { getDocs, collection } from 'firebase/firestore'
import { db } from "@/firebase"

export const actions = {
  async fetchSliderContent() {
    try {
      const res = await getDocs(collection(db, 'products'))

      const productsFiltered = res.docs.filter((product) => {
        if (!product.exists()) return false

        return product.data().actions.isPopular
      }).map((product) => ({ ...product.data(), id: product.id }))

      this.sliderContent = productsFiltered
    } catch (error) {
      console.error('Не удалось получить контент для слайдера', error.message)
    }
  }
}