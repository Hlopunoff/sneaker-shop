import { AppLocationModal } from '../modal'

import { useBem } from "@/composables/use"

export default {
  name: 'app-location-main',
  components: {
    AppLocationModal,
  },
  setup() {
    const b = useBem('app-location-main')

    return {
      b,
    }
  }
}