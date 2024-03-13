import { useBem } from '@/composables/use'

import { AppHomeSlider } from '../slider'
import { AppHomeBrands } from '../brands'
import { AppHomeProductSlider } from '../product-slider'

import { promoSliderData } from '../../mocks/slider' 

export default {
  name: 'app-home-main',
  components: {
    AppHomeSlider,
    AppHomeBrands,
    AppHomeProductSlider,
  },
  setup() {
    const b = useBem('app-home-main')

    return {
      b,
      promoSliderData,
    }
  }
}