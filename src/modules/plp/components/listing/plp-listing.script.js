import { computed, watch } from "vue"
import { useRoute } from 'vue-router'

import { useBem } from "@/composables/use"
import { usePlpMainStore } from '../../stores'

import { AppProductCard } from '@/components/product-card'
import { AppFiltersMain } from '@/modules/filters/components/main'

export default {
  name: 'app-plp-listing',
  components: {
    AppFiltersMain,
    AppProductCard,
  },
  props: {},
  setup() {
    const b = useBem('app-plp-listing')
    const route = useRoute()
    const mainPlpStore = usePlpMainStore()

    const listing = computed(() => mainPlpStore.products)

    watch(() => route.params.category, (category) => {
      mainPlpStore.fetchProductsByCategory(category)
    }, {immediate: true})

    return {
      b,
      
      listing,
    }
  },
}