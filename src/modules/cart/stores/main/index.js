import { defineStore, getActivePinia } from 'pinia'

import { state } from './state'
import { actions } from './actions'

export const useCartStore = () => {
  const init = defineStore('cartMain', {
    state,
    actions,
  })

  return init(getActivePinia())
}