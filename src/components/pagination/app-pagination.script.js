import { ref, computed, onMounted, watch } from 'vue'
import { useBreakpoints } from '@vueuse/core'

import { AppArrowIcon, AppArrowDoubleIcon } from "@/ui-components/icons" 

import { useBem } from "@/composables/use"
import { BREAKPOINTS } from '@/constants'
import { CONSTANT_ITEMS_AMOUNT } from './scripts/const'

export default {
  name: 'app-pagination',
  components: {
    AppArrowIcon,
    AppArrowDoubleIcon,
  },
  props: {
    pagesAmount: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    //todo Завязаться на входящий параметр из пропрсов
    const b = useBem('app-pagination')
    const bp = useBreakpoints(BREAKPOINTS)

    const paginationItemRef = ref(null)
    const paginationItemsRef = ref(null)
    const pagesAmountInternal = ref(0);

    const fromTablet = computed(() => bp.TABLET_SMALL.value)
    const requiredItemAmount = computed(() => fromTablet.value ? CONSTANT_ITEMS_AMOUNT.MOBILE : CONSTANT_ITEMS_AMOUNT.TABLET)

    const getPagesAmount = () => {
      if (paginationItemRef.value && paginationItemsRef.value) {
        const columnGap = window.getComputedStyle(paginationItemsRef.value).getPropertyValue('column-gap')
        const columnGapFormatted = columnGap ? +columnGap.replace('px', '') : 0

        const paginationItemWidth = paginationItemRef.value.offsetWidth
        const paginationItemsWidth = paginationItemsRef.value.offsetWidth
        // Считаем, сколько пискелей суммарно занимают гэпы
        const gapSpace = (Math.floor(paginationItemsWidth / paginationItemWidth) - 1) * columnGapFormatted

        // Считаем кол-во айтемов, которое поместится в контейнер
        const pagesAmountFit = Math.floor((paginationItemsWidth - gapSpace - (requiredItemAmount.value * paginationItemWidth)) / paginationItemWidth)

        pagesAmountInternal.value = pagesAmountFit > 0 ? pagesAmountFit : 0
      }
    }

    watch(fromTablet, () => {
      getPagesAmount()
    })

    onMounted(() => {
      getPagesAmount()
    })

    return {
      b,
      fromTablet,

      paginationItemRef,
      paginationItemsRef,
      pagesAmountInternal,
    }
  }
}