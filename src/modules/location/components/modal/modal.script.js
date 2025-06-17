import { computed, ref, unref } from "vue"
import debounce  from "lodash/debounce"

import { useBem } from "@/composables/use"
import { useLocationStore } from "../../stores"

import { AppButton } from "@/ui-components/button"

export default {
  name: 'app-location-modal',
  components: {
    AppButton,
  },
  setup() {
    const b = useBem('app-location-modal')
    const locationStore = useLocationStore()

    const address = ref('')

    const isModalOpened = computed(() => locationStore.isLocationModalOpened)
    const suggestions = computed(() => locationStore.suggestions)

    const enterDeliveryAddress = debounce(locationStore.enterDeliveryAddress, 200)

    const onModalClose = () => {
      locationStore.toggleLocationModal()
    }

    const onApplyButtonClick = () => {
      locationStore.setDeliveryAddress(unref(address))

      onModalClose()
      address.value = ''
    }

    return {
      b,

      isModalOpened,
      enterDeliveryAddress,
      suggestions,
      onApplyButtonClick,
      address,
      onModalClose,
    }
  }
}