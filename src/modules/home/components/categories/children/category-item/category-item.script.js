import { RouterLink } from "vue-router"

import { useBem } from "@/composables/use"

export default {
  name: 'app-home-category-item',
  components: {
    RouterLink,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    productMinPrice: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
  setup() {
    const b = useBem('app-home-category-item')

    return {
      b,
    }
  }
}