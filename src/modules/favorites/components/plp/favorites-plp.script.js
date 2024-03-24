import { RouterLink } from 'vue-router'
import { AppProductCard } from '@/components/product-card'
import { AppPagination } from '@/components/pagination'

import { useBem } from "@/composables/use"

import { wishlistMockListing } from '../../mocks/plp'

export default {
  name: 'app-favorites-plp',
  components: {
    AppProductCard,
    AppPagination,
    RouterLink,
  },
  setup() {
    const b = useBem('app-favorites-plp')

    return {
      b,

      wishlistMockListing,
    }
  }
}