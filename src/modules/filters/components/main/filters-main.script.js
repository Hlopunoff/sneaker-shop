import { useBem } from "@/composables/use"

export default {
  name: 'app-filters-main',
  components: {},
  setup() {
    const b = useBem('app-filters-main')

    return {
      b,
    }
  }
}