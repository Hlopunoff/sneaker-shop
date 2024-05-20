export const getters = {
  ordersFormatted() {
    return this.orders?.map((order) => ({
      orderId: order.id.split('-')[0],
      total: order.orderTotal,
      images: order.items.map((item) => item.images[0]),
      itemsAmount: order.items.length,
      deliveryDate: order.deliveryDate,
    }))
  }
}