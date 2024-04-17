import { computed } from "vue"

import { useBem } from "@/composables/use"
import { formatNumber } from "@/utils/formatNumber"

import { VIEW } from './scripts/const'

export default {
  name: 'app-price',
  props: {
    view: {
      type: String,
      default: VIEW.CURRENT,
      validator: (value) => Object.values(VIEW).includes(value),
    },
    value: {
      type: Number,
      default: 0,
    },
    showCurrency: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const b = useBem('app-price')

    const valueFormatted = computed(() => formatNumber(props.value, {showCurrency: props.showCurrency}))

    return {
      b,
      valueFormatted,
    }
  }
}