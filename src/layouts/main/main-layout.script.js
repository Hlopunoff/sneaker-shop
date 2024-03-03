import { useBem } from "@/composables/use"

import { RouterView } from 'vue-router'

export default {
  name: 'main-layout',
  components: {
    RouterView,
  },
  setup() {
    const b = useBem('main-layout')

    return {
      b,
    }
  }
}