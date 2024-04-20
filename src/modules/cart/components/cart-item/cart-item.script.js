import { useBem } from "@/composables/use"

import { AppPrice, VIEW as PRICE_VIEW } from "@/components/price"
import { AppButton, VIEW as BUTTON_VIEW } from "@/ui-components/button"

export default {
  name: 'app-cart-item',
  components: {
    AppPrice,
    AppButton,
  },
  props: {
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
  setup() {
    const b = useBem('app-cart-item')

    return {
      b,
      PRICE_VIEW,
      BUTTON_VIEW,
    }
  }
}