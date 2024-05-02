import { computed, watch, unref } from 'vue'
import { useRoute } from 'vue-router'
import { useBreakpoints } from '@vueuse/core'

import { useBem } from "@/composables/use"

import { AppButton } from "@/ui-components/button" 

import { AppPdpGallery } from '../gallery'
import { AppPdpPrices } from './children/prices'
import { AppPdpAttributes } from './children/attributes'
import { AppPdpInfo } from "./children/info"
import { AppPdpInfoItem } from "./children/info-item"
import { AppHomeProductSlider } from '@/modules/home/components/product-slider'

import { usePdpMainStore } from '../../stores'
import { useCartStore } from '@/modules/cart/stores/main'
import { useAuthStore } from '@/modules/header/stores'

import { BREAKPOINTS } from '@/constants'

export default {
  name: 'app-pdp-main',
  components: {
    AppPdpGallery,
    AppPdpPrices,
    AppPdpAttributes,
    AppPdpInfo,
    AppPdpInfoItem,
    AppButton,
    AppHomeProductSlider,
  },
  setup() {
    const bp = useBreakpoints(BREAKPOINTS)
    const b = useBem('app-pdp-main')
    const route = useRoute()

    const mainStore = usePdpMainStore()
    const cartStore = useCartStore()
    const authStore = useAuthStore()

    const galleryView = computed(() => bp.TABLET_SMALL.value ? 'expanded' : 'narrow')

    const product = computed(() => mainStore.productFormatted)
    const isCartButtonDisabled = computed(() => !authStore.isLoggedIn || cartStore.isCartPending)

    const getInfoItemView = (item) => {
      return Array.isArray(item.details) ? 'table' : 'row'
    }

    const addToCart = () => {
      if (!authStore.isLoggedIn) return

      cartStore.addToCart(unref(product).id)
    }

    watch(() => route.params.id, (id) => {
      mainStore.fetchProduct(id)
    }, { immediate: true })

    return {
      b,

      getInfoItemView,
      galleryView,
      product,

      addToCart,
      isCartButtonDisabled,
    }
  }
}