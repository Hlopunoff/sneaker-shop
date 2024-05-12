import { computed, toRefs, unref } from "vue"

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

    const ordersInternal = computed(() => unref(orders).map((order) => ({
      orderId: order.id,
      total: order.total,
      images: order.items.map((item) => item.images[0]),
      itemsAmount: order.items.length,
      deliveryDate: order.deliveryDate,
    })))

    return {
      b,
      ordersInternal,
    }
  }
}