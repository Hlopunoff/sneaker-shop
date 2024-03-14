import { useBem } from "@/composables/use"

export default {
  name: 'app-home-category-item',
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
  },
  components: {},
  setup() {
    const b = useBem('app-home-category-item')

    return {
      b,
    }
  }
}