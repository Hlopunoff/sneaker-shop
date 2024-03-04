import { useBem } from "@/composables/use"

import { RouterView } from 'vue-router'
import { HeaderMain } from '../../modules/header/components/main'

export default {
  name: 'main-layout',
  components: {
    RouterView,
    HeaderMain,
  },
  setup() {
    const b = useBem('main-layout')

    return {
      b,
    }
  }
}