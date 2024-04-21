import { defineStore, getActivePinia } from "pinia"

import { state } from './state'
import { getters } from './getters'
import { actions } from './actions'

export const usePdpMainStore = () => {
  const init = defineStore('pdpMain', {
    state,
    getters,
    actions,
  })

  return init(getActivePinia())
}