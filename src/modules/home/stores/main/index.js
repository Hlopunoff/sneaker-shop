import { defineStore, getActivePinia } from "pinia"

import { state } from './state'
import { getters } from './getters'
import { actions } from './actions'

export const useHomeMainStore = () => {
  const init = defineStore('homeMain', {
    state,
    getters,
    actions,
  })

  return init(getActivePinia())
}