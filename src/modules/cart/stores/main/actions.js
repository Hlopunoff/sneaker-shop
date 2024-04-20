import { useMainStore } from '@/modules/core/stores/main'

export const actions = {
  toggleModal() {
    const mainStore = useMainStore()

    this.isModalOpened = !this.isModalOpened

    if (this.isModalOpened) {
      mainStore.disableScroll()
    } else {
      mainStore.enableScroll()
    }
  }
}