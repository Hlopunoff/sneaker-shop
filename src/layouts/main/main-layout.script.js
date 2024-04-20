import { useBem } from "@/composables/use"

import { RouterView } from 'vue-router'
import { HeaderMain } from '../../modules/header/components/main'
import { AppFooterMain } from "@/modules/footer/components/main"
import { AppCartMain } from "@/modules/cart/components/main"

export default {
  name: 'main-layout',
  components: {
    RouterView,
    HeaderMain,
    AppFooterMain,
    AppCartMain,
  },
  setup() {
    const b = useBem('main-layout')

    return {
      b,
    }
  }
}