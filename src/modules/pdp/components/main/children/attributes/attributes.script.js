import { computed } from 'vue'

import { useBem } from "@/composables/use"

export default {
  name: 'app-pdp-attributes',
  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    values: {
      type: Array,
      default: [],
    },
  },
  setup(props) {
    const b = useBem('app-pdp-attributes')

    const itemMods = computed(() => ({
      [props.type]: true,
    }))

    return {
      b,
      itemMods,
    }
  }
}