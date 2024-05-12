import { defineStore, getActivePinia } from "pinia"

import { state } from "./state"
import { actions } from "./actions"
import { getters } from "./getters"

export const useOrdersStore = () => {
  const init = defineStore('orders', {
    state,
    getters,
    actions,
  })

  return init(getActivePinia())
}