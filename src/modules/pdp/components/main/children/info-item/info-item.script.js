import { computed } from 'vue'

import { useBem } from "@/composables/use"

import { VIEWS } from './scripts/const'

export default {
  name: 'app-pdp-info-item',
  props: {
    view: {
      type: String,
      default: VIEWS.ROW,
      validator: (value) => Object.values(VIEWS).includes(value),
    },
    details: {
      type: [Array, String],
      default: '',
    },
  },
  setup(props) {
    const b = useBem('app-pdp-info-item')

    const isTableView = computed(() => props.view === VIEWS.TABLE)

    return {
      b,

      isTableView,
    }
  }
}