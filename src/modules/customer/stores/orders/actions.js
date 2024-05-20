import { db } from "@/firebase"
import { useAuthStore } from "@/modules/header/stores"
import { getDoc, doc } from "firebase/firestore"
import { useToast } from "vue-toastification"

const toast = useToast()

export const actions = {
  setOrder(order) {
    this.orders.unshift(order)
    this.setOrderToLocalStorage()
  },
  setOrderToLocalStorage() {
    const userData = JSON.parse(localStorage.getItem('user'))

    if (!userData) return

    localStorage.setItem('user', JSON.stringify({...userData, orders: this.orders}))
  },
  async fetchOrders() {
    const authStore = useAuthStore()
    const userId = authStore.user.uid
    try {
      this.isPending = true

      const res = await getDoc(doc(db, 'users', userId))

      if (!res.exists()) {
        throw new Error('Пользователь не найден')
      }

      const ordersInternal = []

      for (const order of Object.values(res.data().orders)) {
        ordersInternal.push(order)
      }

      this.orders = ordersInternal
      this.setOrderToLocalStorage()
    } catch (error) {
      toast.error(error.message)
    } finally {
      this.isPending = false
    }
  }
}