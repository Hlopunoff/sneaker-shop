import { db } from "@/firebase"
import { useAuthStore } from "@/modules/header/stores"
import { getDoc, doc, updateDoc, deleteField } from "firebase/firestore"
import { useToast } from "vue-toastification"

const toast = useToast()

export const actions = {
  setOrder(order) {
    this.orders.unshift(order)
  },
  async fetchOrders() {
    const authStore = useAuthStore()
    const userId = authStore.user.uid
    try {
      this.isPending = true

      const res = await getDoc(doc(db, 'users', userId))

      if (!res.exists()) {
        return
      }

      const ordersInternal = []

      for (const order of Object.values(res.data().orders)) {
        ordersInternal.push(order)
      }

      this.orders = ordersInternal
    } catch (error) {
      toast.error(error.message)
    } finally {
      this.isPending = false
    }
  },
  async cancelOrder(orderId) {
    const orderIdInternal = this.orders.filter((order) => order.id.startsWith(orderId))[0].id
    
    const authStore = useAuthStore()
    const userId = authStore.user.uid
    try {
      await updateDoc(doc(db, 'users', userId), {
        [`orders.${orderIdInternal}`]: deleteField(),
      })

      this.orders = this.orders.filter((order) => orderIdInternal !== order.id)

      toast.success('Заказ успешно отменен')
    } catch (error) {
      toast.error(error.message)
    }
  }
}