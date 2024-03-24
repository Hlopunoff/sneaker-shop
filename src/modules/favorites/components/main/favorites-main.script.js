import { useRoute } from 'vue-router'
import { AppBreadcrumbs } from '@/components/breadcrumbs'
import { AppFavoritesPlp } from '../plp'

import { useBem } from "@/composables/use"

export default {
  name: 'app-favorites-main',
  components: {
    AppFavoritesPlp,
    AppBreadcrumbs,
  },
  setup() {
    const b = useBem('app-favorites-main')
    const { matched } = useRoute()

    return {
      b,
      matched,
    }
  }
}