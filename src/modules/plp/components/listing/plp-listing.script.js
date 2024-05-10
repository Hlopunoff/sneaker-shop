import { computed, unref, watch } from "vue"
import { useRoute } from 'vue-router'

import { useBem } from "@/composables/use"
import { usePlpMainStore } from '../../stores'
import { useFiltersStore } from "@/modules/filters/stores"

import { AppProductCardSkeleton } from "@/components/skeleton/product-card-skeleton"

import { AppProductCard } from '@/components/product-card'
import { AppFiltersMain } from '@/modules/filters/components/main'
import { AppButton } from "@/ui-components/button"

export default {
  name: 'app-plp-listing',
  components: {
    AppFiltersMain,
    AppProductCard,
    AppProductCardSkeleton,
    AppButton,
  },
  props: {},
  setup() {
    const b = useBem('app-plp-listing')
    const route = useRoute()
    const mainPlpStore = usePlpMainStore()
    const filtersStore = useFiltersStore()

    const listing = computed(() => mainPlpStore.products)
    const selectedFilters = computed(() => filtersStore.selectedFilters)
    const isListingPending = computed(() => mainPlpStore.isPending)

    const onResetButtonClick = () => {
      filtersStore.resetSelectedFilters()
    }

    watch(() => route.params.category, (category) => {
      filtersStore.getFilters(category)
      mainPlpStore.fetchProductsByCategory(category)

    }, { immediate: true })
    
    watch([() => unref(selectedFilters).brand, () => unref(selectedFilters).colors, () => unref(selectedFilters).sizes], () => {
      mainPlpStore.fetchProductsByFilters(route.params.category)
    })

    return {
      b,
      
      listing,
      isListingPending,
      onResetButtonClick,
    }
  },
}