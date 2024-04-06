import { RouterLink } from "vue-router"
import { computed } from 'vue'

import { useBem } from "@/composables/use"
import { useAuthStore } from '../../stores'

import { AppSearchIcon, AppHeartIcon, AppCartIcon, AppUserIcon } from "@/ui-components/icons"
import { AppHeaderAuthModal } from '../auth-modal'

export default {
  name: 'app-nav-expanded',
  components: {
    RouterLink,
    AppSearchIcon,
    AppHeartIcon,
    AppCartIcon,
    AppUserIcon,
    AppHeaderAuthModal,
  },
  setup() {
    const b = useBem('nav-expanded')
    const authStore = useAuthStore()

    const isAuthModalOpened = computed(() => authStore.isAuthModalOpened)

    const onAuthModalToggle = () => {
      if (!authStore.isAuthorized) {
        authStore.toggleAuthModal()
      }
    }

    return {
      b,
      
      onAuthModalToggle,
      isAuthModalOpened,
    }
  }
}