import { useMainStore } from "@/modules/core/stores/main"

import { useToast } from "vue-toastification"

import { GeoSuggest } from "@/libs/geo-suggest"

const geoSuggest = new GeoSuggest()
const toast = useToast()

export const actions = {
  toggleLocationModal() {
    const mainStore = useMainStore()

    this.isLocationModalOpened = !this.isLocationModalOpened

    if (this.isLocationModalOpened) {
      mainStore.disableScroll()
    } else {
      mainStore.enableScroll()
    }
  },
  async enterDeliveryAddress(address) {
    try {
      const res = await geoSuggest.getAddressSuggest(address)

      this.suggestions = res.results.map((item) => item.address.formatted_address)
    } catch (error) {
      toast.error(error.message)
      console.error(error)
    }
  },
  setDeliveryAddress(address) {
    if (!address) {
      toast.error('Вы не ввели адрес')
      return
    }

    this.deliveryAddress = address

    toast.success('Адрес успешно сохранен')
  },
}