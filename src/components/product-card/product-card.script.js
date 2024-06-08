import { computed, ref, toRefs, unref } from 'vue'
import { RouterLink } from 'vue-router'
import { useBreakpoints } from '@vueuse/core'
import { useToast } from 'vue-toastification'

import { AppProductCardLabel } from './children/label'
import { SIZE as LABEL_SIZE } from './children/label/scripts/const'

import { useAuthStore } from '@/modules/header/stores'
import { useCartStore } from '@/modules/cart/stores/main'
import { useFavoritesStore } from '@/modules/favorites/stores'

import { AppHeartIcon, AppCartIcon } from '@/ui-components/icons'
import { AppButton } from '@/ui-components/button'
import { useBem } from "@/composables/use"
import { formatNumber } from '@/utils/formatNumber'
import { BREAKPOINTS } from '@/constants'

export default {
  name: 'app-product-card',
  components: {
    AppProductCardLabel,
    AppButton,
    AppHeartIcon,
    AppCartIcon,
    RouterLink,
  },
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    //TODO Сделать Ui компонент button-with-icon-only для кнопок, содержащих только иконки и заменить везде в проекте
    // todo попробовать через intersection observer менять текущий слайд карточки
    const b = useBem('app-product-card')
    const bp = useBreakpoints(BREAKPOINTS)
    const toast = useToast()

    const authStore = useAuthStore()
    const cartStore = useCartStore()
    const favoritesStore = useFavoritesStore()

    const { product } = toRefs(props)

    const currentSlideIndex = ref(0)

    const fromTablet = computed(() => bp.TABLET.value)

    const labelSize = computed(() => fromTablet.value ? LABEL_SIZE.M : LABEL_SIZE.S)
    const currentCurrencyFormatted = computed(() => formatNumber(unref(product).prices.current, { showCurrency: true }))
    const oldCurrencyFormatted = computed(() => formatNumber(unref(product).prices.old, { showCurrency: true }))
    const isAddedToWishlist = computed(() => favoritesStore.products.has(unref(product).id))

    const onSliderDotClick = (index) => {
      currentSlideIndex.value = index
    }

    const addToCart = () => {
      if (!authStore.isLoggedIn) {
        toast.error('У вас должен быть аккаунт для этой операции')
        return
      }
      
      cartStore.addToCart(unref(product).id)
    }

    const toggleWishlist = () => {
      if (!authStore.isLoggedIn) {
        toast.error('У вас должен быть аккаунт для этой операции')
        return
      }

      favoritesStore.toggleWishList(unref(product).id)
    }

    return {
      b,

      labelSize,
      fromTablet,

      currentSlideIndex,
      onSliderDotClick,

      currentCurrencyFormatted,
      oldCurrencyFormatted,
      isAddedToWishlist,

      addToCart,
      toggleWishlist,
    }
  }
}