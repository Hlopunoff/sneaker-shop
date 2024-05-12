import { computed } from "vue"

import { useBem } from "@/composables/use"

import { AppCustomerOrders } from "../orders"

import { useOrdersStore } from "../../stores/orders"

export default {
  name: 'app-customer-main',
  components: {
    AppCustomerOrders,
  },
  setup() {
    const b = useBem('app-customer-main')
    const ordersStore = useOrdersStore()

    const orders = computed(() => ordersStore.orders)

    return {
      b,

      orders,
    }
  }
}