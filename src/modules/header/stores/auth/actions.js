export const actions = {
  toggleAuthModal() {
    this.isAuthModalOpened = !this.isAuthModalOpened

    if (this.isAuthModalOpened) {
      document.querySelector('html').style.overflow = 'hidden'
      document.querySelector('html').style.scrollbarWidth = 'none'
    } else {
      document.querySelector('html').style.overflow = 'auto'
      document.querySelector('html').style.scrollbarWidth = 'auto'
    }
  },
  toggleActiveTab(activeTab) {
    this.activeTab = activeTab
  },
}