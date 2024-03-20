import { useBem } from "@/composables/use"

import { AppButton, VIEW } from '@/ui-components/button'
import { AppInput } from '@/ui-components/input'

export default {
  name: 'app-home-cta',
  components: {
    AppButton,
    AppInput,
  },
  setup() {
    const b = useBem('app-home-cta')
    const submitButtonView = VIEW.SECONDARY

    return {
      b,

      submitButtonView,
    }
  }
}