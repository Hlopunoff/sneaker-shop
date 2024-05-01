import { defineStore, getActivePinia } from 'pinia'

import { state } from './state'
import { actions } from './actions'
import { getters } from './getters'

export const useCartStore = () => {
  const init = defineStore('cartMain', {
    state,
    actions,
    getters,
  })

  return init(getActivePinia())
}