import { computed, ref } from 'vue'

import { useBem } from "@/composables/use"
import { AppButton } from '@/ui-components/button'

import { AppCartItem } from '../cart-item'

import { useCartStore } from '../../stores/main'

import { cartItem } from '../../mocks/cart-item'

export default {
  name: 'app-cart-modal',
  components: {
    AppButton,
    AppCartItem,
  },
  props: {},
  setup() {
    const b = useBem('app-cart-modal')
    const cartStore = useCartStore()

    const isModalOpened = computed(() => cartStore.isModalOpened)

    const isCartEmpty = ref(false)

    const onOverlayClick = () => {
      cartStore.toggleModal()
    }

    const onCloseButtonClick = () => {
      cartStore.toggleModal()
    }

    return {
      b,

      isModalOpened,
      isCartEmpty,

      onOverlayClick,
      onCloseButtonClick,
      cartItem,
    }
  }
}