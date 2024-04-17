import { computed, ref } from 'vue'

import { useBem } from "@/composables/use"

import { VIEW } from './scripts/const'

export default {
  name: 'app-pdp-gallery',
  components: {},
  props: {
    view: {
      type: String,
      default: VIEW.EXPANDED,
      validator: (value) => Object.values(VIEW).includes(value),
    },
    slides: {
      type: Array,
      default: [],
    },
  },
  setup(props) {
    const b = useBem('app-pdp-gallery')

    const activeImageIndex = ref(0)

    const isExpanded = computed(() => props.view === VIEW.EXPANDED)
    const minimizedSectionSize = computed(() => `${Math.floor(100 / props.slides.length)}%`)

    const onImageHover = (index) => {
      activeImageIndex.value = index
    }

    return {
      b,
      isExpanded,
      minimizedSectionSize,
      onImageHover,
      activeImageIndex,
    }
  }
}