import { useBem } from '@/composables/use'

import { AppHomeSlider } from '../slider'
import { AppHomeBrands } from '../brands'

import { promoSliderData } from '../../mocks/slider' 

export default {
  name: 'app-home-main',
  components: {
    AppHomeSlider,
    AppHomeBrands,
  },
  setup() {
    const b = useBem('app-home-main')

    return {
      b,
      promoSliderData,
    }
  }
}