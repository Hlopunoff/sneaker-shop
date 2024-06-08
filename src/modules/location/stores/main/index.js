import { defineStore, getActivePinia } from "pinia"

import { state } from "./state"
import { actions } from "./actions"
import { getters } from "./getters"

export const useLocationStore = () => {
  const init = defineStore('locationMain', {
    state,
    getters,
    actions,
  })

  return init(getActivePinia())
}