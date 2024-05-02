export const state = () => {
  return {
    selectedFilters: {
      brand: null,
      sizes: null,
      colors: null,
    },
    filters: {
      sizes: new Set(),
      brands: new Set(),
      colors: new Set(),
    },
  }
}