import { useBem } from "@/composables/use"
import { AppPrice, VIEW } from "@/components/price"

export default {
  name: 'app-pdp-prices',
  components: {
    AppPrice,
  },
  props: {
    current: {
      type: Number,
      required: true,
    },
    old: {
      type: [Number, null],
      default: null,
    },
  },
  setup() {
    const b = useBem('app-pdp-prices')

    return {
      b,
      VIEW,
    }
  }
}