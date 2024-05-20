import { RouterLink } from "vue-router"
import { computed } from "vue"

import { useBem } from "@/composables/use"
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
    const cartStore = useCartStore()

    const onCartModalToggle = () => {
      cartStore.toggleModal()
    }

    const totalCartAmount = computed(() => cartStore.totalCount)

    return {
      b,

      onCartModalToggle,

      totalCartAmount,
    }
  }
}