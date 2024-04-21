export const getters = {
  sliderContentFormatted() {
    return this.sliderContent.map((product) => ({
      id: product.id,
      images: product.images,
      name: `${product.brand} ${product.name}`,
      prices: product.prices,
      discount: product.discount,
      actions: product.actions,
      badge: product.badge,
    }))
  }
}