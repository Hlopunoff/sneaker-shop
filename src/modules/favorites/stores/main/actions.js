import { useToast } from 'vue-toastification'
import { deleteField, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { useAuthStore } from '@/modules/header/stores'
import { db } from '@/firebase'

const toast = useToast()

export const actions = {
  async toggleWishList(productId) {
    const authStore = useAuthStore()
    const userId = authStore.user.uid

    try {
      const product = await getDoc(doc(db, 'products', productId))

      if (!product.exists()) {
        throw new Error('Не удалось добавить товар в избранное')
      }

      if (this.products.has(productId)) {
        await updateDoc(doc(db, 'users', userId), {
          [`wishlist.${productId}`]: deleteField(),
        })

        this.products.delete(productId)

        toast.success('Товар успешно удален из избранного')
      } else {
        await setDoc(doc(db, 'users', userId), {
          wishlist: {
            [productId]: product.data()
          }
        }, {merge: true})

        this.products.set(productId, product.data())

        toast.success('Товар успешно добавлен в избранное')
      }
    } catch (error) {
      toast.error(error.message)
    }
  },
  async fetchWishlist() {
    const authStore = useAuthStore()
    const userId = authStore.user.uid
    try {
      this.isPending = true

      const res = await getDoc(doc(db, 'users', userId))

      if (!res.exists()) {
        return
      }
      
      for (const key in res.data().wishlist) {
        this.products.set(key, res.data().wishlist?.[key])
      }
    } catch (error) {
      toast.error(error.message)
    }
    finally {
      this.isPending = false
    }
  }
}