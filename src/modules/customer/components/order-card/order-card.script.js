import { computed, toRefs, unref } from "vue"

import { useBem } from "@/composables/use"
import { formatDate } from "@/utils/formatDate"

import { AppPrice } from "@/components/price"

export default {
  name: 'app-customer-order-card',
  components: {
    AppPrice,
  },
  props: {
    orderId: {
      type: [Number, String],
      required: true,
    },
    total: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      default: [],
    },
    itemsAmount: {
      type: Number,
      default: 0,
    },
    deliveryDate: {
      type: Number,
      default: 0,
    },
    address: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const b = useBem('app-customer-order-card')
    const { deliveryDate } = toRefs(props)

    const deliveryDateFormatted = computed(() => formatDate(unref(deliveryDate)))

    return {
      b,
      deliveryDateFormatted,
    }
  }
}