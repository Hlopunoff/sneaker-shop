export const getters = {
  itemsFormatted() {
    const itemsFormatted = []
    
    this.items.forEach((item) => {
      itemsFormatted.push({
        id: item.id,
        name: item.name,
        imageUrl: item.images[0],
        size: item.selectedConfiguration?.size,
        color: item.selectedConfiguration?.color,
        amount: item.amount,
        currentPrice: item.prices.current,
        oldPrice: item.prices.old
      })
    })

    return itemsFormatted
  },
}