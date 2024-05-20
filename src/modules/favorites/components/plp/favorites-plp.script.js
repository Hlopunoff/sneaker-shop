import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { AppProductCard } from '@/components/product-card'
import { AppPagination } from '@/components/pagination'

import { useBem } from "@/composables/use"

import { useFavoritesStore } from '../../stores'

export default {
  name: 'app-favorites-plp',
  components: {
    AppProductCard,
    AppPagination,
    RouterLink,
  },
  setup() {
    const b = useBem('app-favorites-plp')
    const favoritesStore = useFavoritesStore()

    const items = computed(() => favoritesStore.productsFormatted)

    onMounted(() => {
      favoritesStore.fetchWishlist()
    })

    return {
      b,

      items,
    }
  }
}