export const getters = {
  itemsFormatted() {
    const itemsFormatted = []

    for (const [key, value] of this.items.entries()) {
      itemsFormatted.push({
        id: key,
        name: value.name,
        imageUrl: value.images[0],
        size: value.selectedConfiguration?.size,
        color: value.selectedConfiguration?.color?.color,
        amount: value.amount,
        currentPrice: value.prices.current,
        oldPrice: value.prices.old
      })
    }

    return itemsFormatted
  },
}