import { RouterLink } from "vue-router"

import { useBem } from "@/composables/use"

import { AppSearchIcon, AppHeartIcon, AppCartIcon } from "@/ui-components/icons"

export default {
  name: 'app-nav-expanded',
  components: {
    RouterLink,
    AppSearchIcon,
    AppHeartIcon,
    AppCartIcon,
  },
  setup() {
    const b = useBem('nav-expanded')

    return {
      b,
    }
  }
}