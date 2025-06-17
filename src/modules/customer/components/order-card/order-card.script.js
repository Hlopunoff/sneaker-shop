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

    const generateDeliveryPhone = () => {
      let phoneFormatted = '+7 (9'

      for (let i = 0; i < 12; i++) {
        if (i === 2) {
          phoneFormatted += ') '
        } else if (i === 6 || i === 9) {
          phoneFormatted += '-'
        } else {
          phoneFormatted += Math.floor(Math.random() * 10)
        }
      }

      const phone = phoneFormatted.replace(/[\s()-]/g, '')

      return { phoneFormatted, phone }
    }

    const { phone, phoneFormatted } = generateDeliveryPhone()

    return {
      b,
      deliveryDateFormatted,
      onCancelOrderClick,

      phone,
      phoneFormatted,
    }
  }
}