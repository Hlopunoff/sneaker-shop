import { useBem } from "@/composables/use"

export default {
  name: 'app-user-icon',
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
      default: '#464646',
    },
  },
  setup() {
    const b = useBem('app-user-icon')

    return {
      b,
    }
  }
}