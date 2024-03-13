import { useBem } from "@/composables/use"

export default {
  name: 'app-home-banner',
  components: {},
  setup() {
    const b = useBem('app-home-banner')

    return {
      b,
    }
  }
}