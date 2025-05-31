import { Api } from "@/api"
import { useToast } from "vue-toastification"

const toast = useToast()
const api = new Api()

export const actions = {
  async fetchOrders() {
    try {
      this.isPending = true

      const { data } = await api.get('customer/orders', {credentials: 'include'})

      this.orders = data
    } catch (error) {
      toast.error(error.message)
    } finally {
      this.isPending = false
    }
  },
  async cancelOrder(orderId) {
    const orderIdInternal = this.orders.filter((order) => order.id.startsWith(orderId))[0].id
    
    try {
      await api.delete(`customer/order?orderId=${orderIdInternal}`, {credentials: 'include'})

      this.orders = this.orders.filter((order) => orderIdInternal !== order.id)

      toast.success('Заказ успешно отменен')
    } catch (error) {
      toast.error(error.message)
    }
  }
}