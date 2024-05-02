import { computed } from "vue"

import { useBem } from "@/composables/use"
import { useFiltersStore } from "../../stores"
import { FILTERS } from '../../constants'

export default {
  name: 'app-filters-main',
  components: {},
  setup() {
    const b = useBem('app-filters-main')
    const filtersStore = useFiltersStore()

    const sizeFilter = computed({
      get() {
        return filtersStore.selectedFilters.sizes
      },
      set(value) {
        filtersStore.setSelectedFilter(FILTERS.SIZES, value)
      }
    })
    const colorFilter = computed({
      get() {
        return filtersStore.selectedFilters.colors
      },
      set(value) {
        filtersStore.setSelectedFilter(FILTERS.COLORS, value)
      }
    })
    const brandFilter = computed({
      get() {
        return filtersStore.selectedFilters.brand
      },
      set(value) {
        filtersStore.setSelectedFilter(FILTERS.BRAND, value)
      }
    })

    const filters = computed(() => ({
      brands: [...filtersStore.filters.brands],
      colors: [...filtersStore.filters.colors],
      sizes: [...filtersStore.filters.sizes].sort((a, b) => a - b)
    }))

    return {
      b,

      sizeFilter,
      colorFilter,
      brandFilter,
      filters,
    }
  }
}