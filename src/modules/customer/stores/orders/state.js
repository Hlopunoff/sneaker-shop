import { ORDER as mockOrder } from "../../mocks/order"

export const state = () => {
  return {
    orders: new Array(3).fill(mockOrder),
  }
}