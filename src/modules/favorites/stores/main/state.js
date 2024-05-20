export const state = () => {
  return {
    isPending: false,
    products: getWishlistFromLocalStorage() ?? new Map(),
  }
}

const getWishlistFromLocalStorage = () => {
  const wishlistInternal = new Map()
  const wishlistStorage = JSON.parse(localStorage.getItem('user'))?.wishlist

  for (const key in wishlistStorage) {
    wishlistInternal.set(key, wishlistStorage[key])
  }

  return wishlistInternal
}