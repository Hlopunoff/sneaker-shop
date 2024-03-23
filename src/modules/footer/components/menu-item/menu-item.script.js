import { RouterLink } from 'vue-router'

import { useBem } from "@/composables/use"

export default {
  name: 'app-footer-menu-item',
  components: {
    RouterLink,
  },
  props: {
    path: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  setup() {
    const b = useBem('app-footer-menu-item')

    return {
      b,
    }
  }
}