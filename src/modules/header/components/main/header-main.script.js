import { computed } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import { useBem } from "@/composables/use"
import { BREAKPOINTS } from '@/constants'

import { AppNavExpanded } from '../nav-expanded'
import { AppNavMinimized } from '../nav-minimized'
import { AppHeaderAuthModal } from '../auth-modal'

import { useAuthStore } from '../../stores'

export default {
  name: 'header-main',
  components: {
    AppNavExpanded,
    AppNavMinimized,
    AppHeaderAuthModal,
  },
  setup() {
    const b = useBem('header-main')
    const bp = useBreakpoints(BREAKPOINTS)
    const authStore = useAuthStore()

    const fromDesktop = computed(() => bp.DESKTOP_SMALL.value)
    const isAuthModalOpened = computed(() => authStore.isAuthModalOpened)

    return {
      b,
      fromDesktop,
      
      isAuthModalOpened,
    }
  }
}