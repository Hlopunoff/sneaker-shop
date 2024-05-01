import { toRefs, unref } from "vue"
import { useBem } from "@/composables/use"

import { AppPrice, VIEW as PRICE_VIEW } from "@/components/price"
import { AppButton, VIEW as BUTTON_VIEW } from "@/ui-components/button"

import { useCartStore } from "../../stores/main"

export default {
  name: 'app-cart-item',
  components: {
    AppPrice,
    AppButton,
  },
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: '',
    },
    imageUrl: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    inStock: {
      type: Number,
      default: 0,
    },
    amount: {
      type: Number,
      default: 0
    },
    currentPrice: {
      type: Number,
      default: 0,
    },
    oldPrice: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const { id } = toRefs(props)

    const b = useBem('app-cart-item')
    const cartStore = useCartStore()

    const increment = () => {
      cartStore.addToCart(unref(id))
    }

    const decrement = () => {
      cartStore.removeItemById(unref(id))
    }

    const removeItem = () => {
      cartStore.deleteFromCart(unref(id))
    }

    return {
      b,
      PRICE_VIEW,
      BUTTON_VIEW,

      increment,
      decrement,
      removeItem,
    }
  }
}