import { useBem } from '@/composables/use'

import { computed } from 'vue'

import { VIEW } from './scripts/const'

export default {
  name: 'app-button',
  props: {
    text: {
      type: String,
      default: '',
      required: true,
    },
    view: {
      type: String,
      default: VIEW.PRIMARY,
      validator: (value) => Object.values(VIEW).includes(value),
    },
    href: {
      type: String,
      default: '',
    },
    full: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const b = useBem('app-button')

    const component = computed(() => props.href ? 'a' : 'button')

    return {
      b,
      component,
    }
  }
}