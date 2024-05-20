import { computed, unref } from 'vue'
import { useRouter } from 'vue-router'

import { useBem } from "@/composables/use"
import { AppButton } from '@/ui-components/button'

import { AppCartItem } from '../cart-item'

import { useCartStore } from '../../stores/main'

export default {
  name: 'app-cart-modal',
  components: {
    AppButton,
    AppCartItem,
  },
  props: {},
  setup() {
    const b = useBem('app-cart-modal')
    const router = useRouter()
    const cartStore = useCartStore()

    const isModalOpened = computed(() => cartStore.isModalOpened)

    const cartItems = computed(() => cartStore.itemsFormatted)
    const isCartEmpty = computed(() => unref(cartItems).length <= 0)

    const onOverlayClick = () => {
      cartStore.toggleModal()
    }

    const onCloseButtonClick = () => {
      cartStore.toggleModal()
    }

    const onCreateButtonCLick = () => {
      cartStore.createOrder()
    }

    const redirectToCatalog = () => {
      router.push('/catalog/category/running')

      cartStore.toggleModal()
    }

    return {
      b,

      isModalOpened,
      isCartEmpty,

      onOverlayClick,
      onCloseButtonClick,
      onCreateButtonCLick,
      redirectToCatalog,

      cartItems,
    }
  }
}