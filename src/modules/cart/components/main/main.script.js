import { useBem } from "@/composables/use"

import { AppCartModal } from '../modal'

export default {
  name: 'app-cart-main',
  components: {
    AppCartModal,
  },
  setup() {
    const b = useBem('app-cart-main')

    return {
      b,
    }
  }
}