import { computed } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import { useBem } from "@/composables/use"
import { BREAKPOINTS } from '@/constants'

import { AppNavExpanded } from '../nav-expanded'
import { AppNavMinimized } from '../nav-minimized'

export default {
  name: 'header-main',
  components: {
    AppNavExpanded,
    AppNavMinimized,
  },
  setup() {
    const b = useBem('header-main')
    const bp = useBreakpoints(BREAKPOINTS)

    const fromDesktop = computed(() => bp.DESKTOP_SMALL.value)

    return {
      b,
      fromDesktop,
    }
  }
}