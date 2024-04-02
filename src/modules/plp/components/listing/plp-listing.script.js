import { useBem } from "@/composables/use"

import { AppProductCard } from '@/components/product-card'
import { AppFiltersMain } from '@/modules/filters/components/main'

import { plpMockListing } from '../../mocks/plp'

export default {
  name: 'app-plp-listing',
  components: {
    AppFiltersMain,
    AppProductCard,
  },
  props: {},
  setup() {
    const b = useBem('app-plp-listing')

    return {
      b,
      plpMockListing,
    }
  }
}