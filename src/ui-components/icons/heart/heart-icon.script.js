import { useBem } from "@/composables/use"

export default {
  name: 'app-heart-icon',
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
  },
  setup() {
    const b = useBem('app-heart-icon')

    return {
      b,
    }
  }
}