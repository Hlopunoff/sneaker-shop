import { useBem } from '@/composables/use'

import { AppHomeSlider } from '../slider'
import { AppHomeBrands } from '../brands'
import { AppHomeProductSlider } from '../product-slider'
import { AppHomeBanner } from '../banner'
import { AppHomeCategories } from '../categories'
import { AppHomeCta } from '../cta'

import { promoSliderData } from '../../mocks/slider' 

export default {
  name: 'app-home-main',
  components: {
    AppHomeSlider,
    AppHomeBrands,
    AppHomeProductSlider,
    AppHomeBanner,
    AppHomeCategories,
    AppHomeCta,
  },
  setup() {
    const b = useBem('app-home-main')

    return {
      b,
      promoSliderData,
    }
  }
}