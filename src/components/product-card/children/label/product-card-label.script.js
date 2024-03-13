import { reactive } from 'vue'

import { useBem } from "@/composables/use"
import { SIZE } from './scripts/const'

export default {
  name: 'app-product-card-label',
  props: {
    text: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: SIZE.M,
      validator: (value) => Object.values(SIZE).includes(value),
    },
  },
  setup(props) {
    const b = useBem('app-product-card-label')

    const labelStyles = reactive({
      backgroundColor: props.backgroundColor,
      color: props.color,
    })

    return {
      b,

      labelStyles,
    }
  }
}