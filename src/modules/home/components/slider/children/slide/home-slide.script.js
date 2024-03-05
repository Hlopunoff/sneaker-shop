import { useBem } from "@/composables/use"

export default {
  name: 'app-home-slide',
  components: {},
  props: {
    backgroundImage: {
      type: String,
      default: '',
    },
  },
  setup() {
    const b = useBem('app-home-slide')

    return {
      b,
    }
  }
}