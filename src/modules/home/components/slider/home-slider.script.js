import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import { AppHomeSlide } from './children/slide'
import { AppButton, VIEW } from '@/ui-components/button'
import { AppSliderArrowIcon } from '@/ui-components/icons'

import { useBem } from "@/composables/use" 
import { BREAKPOINTS } from '@/constants' 

export default {
  name: 'app-home-slider',
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    delay: {
      type: Number,
      default: 5000,
    },
  },
  components: {
    AppHomeSlide,
    AppButton,
    AppSliderArrowIcon,
  },
  setup(props) {
    const b = useBem('app-home-slider')
    const bp = useBreakpoints(BREAKPOINTS)
    const slideButtonView = VIEW.SECONDARY
    let sliderInterval

    const currentSlideIndex = ref(0)

    const tillTablet = computed(() => bp.MOBILE.value && !bp.TABLET.value)
    const showSliderArrows = computed(() => !tillTablet.value)

    const prevSlide = () => {
      if (currentSlideIndex.value > 0) {
        currentSlideIndex.value -= 1
      } else {
        currentSlideIndex.value = props.slides.length - 1
      }
    }

    const nextSlide = () => {
      if (currentSlideIndex.value >= props.slides.length - 1) {
        currentSlideIndex.value = 0
      } else {
        currentSlideIndex.value += 1
      }
    }

    const onDotClick = (slideIndex) => {
      currentSlideIndex.value = slideIndex
    }

    onMounted(() => {
      if (props.autoplay) {
        sliderInterval = setInterval(nextSlide, props.delay)
      }
    })

    onUnmounted(() => {
      clearInterval(sliderInterval)
    })

    return {
      b,

      slideButtonView,
      prevSlide,
      nextSlide,
      currentSlideIndex,
      onDotClick,
      showSliderArrows,
    }
  }
}