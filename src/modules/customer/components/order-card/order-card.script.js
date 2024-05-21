import { computed, toRefs, unref } from "vue"

import { useBem } from "@/composables/use"
import { formatDate } from "@/utils/formatDate"

import { AppPrice } from "@/components/price"
import { AppButton } from "@/ui-components/button"

import { useOrdersStore } from "../../stores"

export default {
  name: 'app-customer-order-card',
  components: {
    AppPrice,
    AppButton,
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
    const ordersStore = useOrdersStore()
    const { deliveryDate, orderId } = toRefs(props)

    const deliveryDateFormatted = computed(() => formatDate(unref(deliveryDate)))

    const onCancelOrderClick = () => {
      ordersStore.cancelOrder(unref(orderId))
    }

    return {
      b,
      deliveryDateFormatted,
      onCancelOrderClick,
    }
  }
}