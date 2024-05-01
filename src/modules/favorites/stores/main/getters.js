export const getters = {
  productsFormatted() {
    const productsFormatted = []

    for (const [key, value] of this.products.entries()) {
      productsFormatted.push({id: key, ...value})
    }
    
    return productsFormatted
  }
}