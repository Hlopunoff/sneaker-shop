import { useBem } from "@/composables/use"

export default {
  name: 'app-arrow-icon',
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    hasStroke: {
      type: Boolean,
      default: true,
    },
    fill: {
      type: String,
      default: '#716969',
    }
  },
  setup() {
    const b = useBem('app-arrow-icon')

    return {
      b,
    }
  }
}