import { defineStore, getActivePinia } from 'pinia'

import { state } from './state'
import { actions } from './actions'
import { getters } from './getters'

export const useFavoritesStore = () => {
  const init = defineStore('wishlistMain', {
    state,
    actions,
    getters,
  })

  return init(getActivePinia())
}
