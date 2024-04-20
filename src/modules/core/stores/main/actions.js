export const actions = {
  disableScroll() {
    document.querySelector('html').style.overflow = 'hidden'
    document.querySelector('html').style.scrollbarWidth = 'none'
  },
  enableScroll() {
    document.querySelector('html').style.overflow = 'visible'
    document.querySelector('html').style.scrollbarWidth = 'auto'
  }
}