export const state = () => {
  const getCartFromLocalStorage = () => {
    const cart = JSON.parse(localStorage.getItem('user'))?.cart
    const cartFormatted = new Map()

    for (const key in cart) {
      cartFormatted.set(key, cart[key])
    }

    return cartFormatted
  }

  return {
    isModalOpened: false,
    isCartPending: false,
    totalCount: getCartFromLocalStorage()?.size ?? 0,
    items: getCartFromLocalStorage() ?? new Map(),
    itemConfiguration: {
      size: '',
      color: '',
    },
  }
}