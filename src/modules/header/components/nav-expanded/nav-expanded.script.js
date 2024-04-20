import { RouterLink } from "vue-router"
import { computed } from 'vue'

import { useBem } from "@/composables/use"
import { useAuthStore } from '../../stores'
import { useCartStore } from '@/modules/cart/stores/main'

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
    const cartStore = useCartStore()

    const isAuthModalOpened = computed(() => authStore.isAuthModalOpened)

    const onAuthModalToggle = () => {
      if (!authStore.isAuthorized) {
        authStore.toggleAuthModal()
      }
    }

    const onCartModalToggle = () => {
      cartStore.toggleModal()
    }

    return {
      b,
      
      onAuthModalToggle,
      isAuthModalOpened,
      
      onCartModalToggle,
    }
  }
}