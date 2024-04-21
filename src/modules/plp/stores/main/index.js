import { defineStore, getActivePinia } from "pinia"

import { state } from './state'
import { getters } from './getters'
import { actions } from './actions'

export const usePlpMainStore = () => {
  const init = defineStore('plpMain', {
    state,
    getters,
    actions,
  })

  return init(getActivePinia())
}