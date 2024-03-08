import { AppNikeIcon, AppNorthFaceIcon, AppAdidasIcon, AppNewBalanceIcon, AppJordanIcon, AppPumaIcon } from '@/ui-components/icons'

import { useBem } from "@/composables/use"

export default {
  name: 'app-home-brands',
  props: {},
  components: {
    AppNikeIcon,
    AppNorthFaceIcon,
    AppPumaIcon,
    AppAdidasIcon,
    AppNewBalanceIcon,
    AppJordanIcon
  },
  setup() {
    const b = useBem('app-home-brands')

    return {
      b,
    }
  }
}