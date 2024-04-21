export const getters = {
  productFormatted() {
    return {
      ...this.product,
      name: `${this.product.brand} ${this.product.name}`,
      gallery: this.product.images,
    }
  },
}