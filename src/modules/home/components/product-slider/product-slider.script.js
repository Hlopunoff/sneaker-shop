import { computed, ref, onMounted } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import { useHomeMainStore } from '../../stores'
import { AppProductCard } from '@/components/product-card'
import { AppSliderArrowIcon } from '@/ui-components/icons'

import { useBem } from "@/composables/use"
import { BREAKPOINTS } from '@/constants'
import { SLIDER_COLUMNS_DESKTOP, SLIDER_COLUMNS_MOBILE } from './scripts/const'

import { popularSliderData }  from '../../mocks/slider'

export default {
  name: 'app-home-product-slider',
  components: {
    AppSliderArrowIcon,
    AppProductCard,
  },
  setup() {
    const b = useBem('app-home-product-slider')
    const bp = useBreakpoints(BREAKPOINTS)
    
    const homeMainStore = useHomeMainStore()

    const currentSlideIndex = ref(0)

    const fromTablet = computed(() => bp.TABLET.value)
    const sliderColumns = computed(() => fromTablet.value ? SLIDER_COLUMNS_DESKTOP : SLIDER_COLUMNS_MOBILE)
    const slides = computed(() => homeMainStore.sliderContentFormatted)


    //TODO: Попробовать написать useSlider для выноса логики работы слайдеров
    const nextSlide = () => {
      if (currentSlideIndex.value >= popularSliderData.length - sliderColumns.value) return

      currentSlideIndex.value += sliderColumns.value
    }

    const prevSlide = () => {
      if (currentSlideIndex.value <= 0) return

      currentSlideIndex.value -= sliderColumns.value
    }

    onMounted(() => {
      homeMainStore.fetchSliderContent()
    })

    return {
      b,

      slides,
      prevSlide,
      nextSlide,
      currentSlideIndex,
      sliderColumns,
    }
  }
}