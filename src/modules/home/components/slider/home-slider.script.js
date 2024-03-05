import { onMounted, onUnmounted, ref } from 'vue'

import { AppHomeSlide } from './children/slide'
import { AppButton, VIEW } from '@/ui-components/button'
import { AppSliderArrowIcon } from '@/ui-components/icons'

import { useBem } from "@/composables/use" 

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
      default: 3000,
    },
  },
  components: {
    AppHomeSlide,
    AppButton,
    AppSliderArrowIcon,
  },
  setup(props) {
    const b = useBem('app-home-slider')
    const slideButtonView = VIEW.SECONDARY
    let sliderInterval

    const currentSlideIndex = ref(0)

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
      sliderInterval = setInterval(nextSlide, props.delay)
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
    }
  }
}