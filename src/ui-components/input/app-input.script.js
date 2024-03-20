import { computed } from 'vue'

import { useBem } from "@/composables/use"

import { STATES, TYPES } from './scripts/const'

export default {
  name: 'app-input',
  props: {
    state: {
      type: String,
      default: STATES.PRIMARY,
      validator: (value) => Object.values(STATES).includes(value),
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: TYPES.TEXT,
      validator: (value) => Object.values(TYPES).includes(value),
    },
  },
  setup(props) {
    const b = useBem('app-input')

    const mods = computed(() => ({
      type: props.type,
      default: true,
      error: false,

    }))

    return {
      b,

      mods,
    }
  }
}