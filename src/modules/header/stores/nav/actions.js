import { useMainStore } from "@/modules/core/stores/main"

export const actions = {
  toggleNavMinimizedModal() {
    const mainStore = useMainStore()

    this.isNavMinimizedOpened = !this.isNavMinimizedOpened

    if (this.isNavMinimizedOpened) {
      mainStore.disableScroll()
    } else {
      mainStore.enableScroll()
    }
  }
}