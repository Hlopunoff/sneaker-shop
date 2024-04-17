import { computed, ref } from 'vue'

import { useBem } from "@/composables/use"
import { AppArrowIcon } from '@/ui-components/icons'

export default {
  name: 'app-pdp-info',
  components: {
    AppArrowIcon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  setup() {
    const b = useBem('app-pdp-info')

    const isOpened = ref(false)
    const accordionMods = computed(() => ({
      closed: isOpened.value
    }))

    const onAccordionClick = () => {
      isOpened.value = !isOpened.value
    }

    return {
      b,

      accordionMods,
      onAccordionClick,
    }
  }
}