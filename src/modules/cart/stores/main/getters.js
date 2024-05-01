export const getters = {
  itemsFormatted() {
    const itemsFormatted = []

    for (const [key, value] of this.items.entries()) {
      itemsFormatted.push({
        id: key,
        name: value.name,
        imageUrl: value.images[0],
        size: value.configuration.sizes.values[0].value,
        color: value.configuration.colors.values[0],
        isStock: 3,
        amount: value.amount,
        currentPrice: value.prices.current,
        oldPrice: value.prices.old
      })
    }

    return itemsFormatted
  },
}