import { computed, ref, toRefs } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import { AppProductCardLabel } from './children/label'
import { SIZE as LABEL_SIZE } from './children/label/scripts/const'

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
  },
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    //TODO Сделать Ui компонент button-with-icon-only для кнопок, содержащих только иконки и заменить везде в проекте
    const b = useBem('app-product-card')
    const bp = useBreakpoints(BREAKPOINTS)

    const { product } = toRefs(props)

    const currentSlideIndex = ref(0)

    const fromTablet = computed(() => bp.TABLET.value)

    const labelSize = computed(() => fromTablet.value ? LABEL_SIZE.M : LABEL_SIZE.S)
    const currentCurrencyFormatted = computed(() => formatNumber(product.value.prices.current, { showCurrency: true }))
    const oldCurrencyFormatted = computed(() => formatNumber(product.value.prices.old, { showCurrency: true }))
    const isAddedToWishlist = computed(() => product.value.actions.isFavorite)

    const onSliderDotClick = (index) => {
      currentSlideIndex.value = index
    }

    const addToFavorites = () => {
      
    }

    return {
      b,

      labelSize,
      fromTablet,

      currentSlideIndex,
      onSliderDotClick,
      addToFavorites,

      currentCurrencyFormatted,
      oldCurrencyFormatted,
      isAddedToWishlist
    }
  }
}