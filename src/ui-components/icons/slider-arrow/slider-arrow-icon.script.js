import { useBem } from "@/composables/use"

export default {
  name: 'app-slider-arrow-icon',
  props: {
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    hasStroke: {
      type: Boolean,
      default: true,
    },
    fill: {
      type: String,
      default: '',
    },
    reversed: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const b = useBem('app-slider-arrow-icon')

    return {
      b,
    }
  }
}