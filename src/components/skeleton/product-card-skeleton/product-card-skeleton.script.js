import { useBem } from "@/composables/use"

export default {
  name: 'app-product-card-skeleton',
  setup() {
    const b = useBem('app-product-card-skeleton')

    return {
      b,
    }
  }
}