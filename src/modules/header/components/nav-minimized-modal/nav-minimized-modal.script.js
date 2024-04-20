import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import { AppButton } from '@/ui-components/button'

import { useBem } from "@/composables/use"
import { useCartStore } from '@/modules/cart/stores/main'
import { useNavStore, useAuthStore } from '../../stores'

export default {
  name: 'app-header-nav-minimized-modal',
  components: {
    RouterLink,
    AppButton,
  },
  setup() {
    const b = useBem('app-header-nav-minimized-modal')
    const navStore = useNavStore()
    const cartStore = useCartStore()
    const authStore = useAuthStore()

    const isModalOpened = computed(() => navStore.isNavMinimizedOpened)
    const isAuth = computed(() => authStore.isAuthorized)

    const onNavItemClick = (type = 'link') => {
      navStore.toggleNavMinimizedModal()

      if (type === 'cart') {
        cartStore.toggleModal()
      }
    }

    const closeMenu = () => {
      navStore.toggleNavMinimizedModal()
    }

    return {
      b,

      isModalOpened,
      onNavItemClick,
      closeMenu,

      isAuth,
    }
  }
}