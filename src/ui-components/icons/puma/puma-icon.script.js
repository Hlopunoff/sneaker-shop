export default {
  name: 'app-puma-icon',
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
      default: '#464646',
    },
  },
}