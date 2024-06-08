import {computed, toRefs, unref} from 'vue'

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
  setup(props) {
    const b = useBem('app-customer-orders')
    const { orders } = toRefs(props)

    const hasOrders = computed(() => unref(orders).length)

    return {
      b,

      hasOrders,
    }
  }
}