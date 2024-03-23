import { RouterLink } from 'vue-router'

import { AppFooterMenuList } from '../menu-list'
import { AppFooterMenuItem } from '../menu-item'

import { useBem } from "@/composables/use"

export default {
  name: 'app-footer-main',
  components: {
    RouterLink,
    AppFooterMenuList,
    AppFooterMenuItem,
  },
  setup() {
    const b = useBem('app-footer-main')

    return {
      b,
    }
  }
}