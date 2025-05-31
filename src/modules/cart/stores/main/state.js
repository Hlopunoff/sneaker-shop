export const state = () => {
  const getCartFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart'))
  }

  return {
    isModalOpened: false,
    isCartPending: false,
    totalCount: getCartFromLocalStorage()?.totalCount ?? 0,
    items: getCartFromLocalStorage()?.items ?? [],
    itemConfiguration: {
      size: '',
      color: '',
    },
  }
}