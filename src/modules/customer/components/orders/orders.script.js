import { useBem } from "@/composables/use"

import { AppCustomerOrderCard } from "../order-card"

export default { 
  name: 'app-customer-orders',
  components: {
    AppCustomerOrderCard,
  },
  props: {
    orders: {
      type: Array,
      default: [],
    },
  },
  setup() {
    const b = useBem('app-customer-orders')

    return {
      b,
    }
  }
}