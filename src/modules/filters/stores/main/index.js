import { defineStore, getActivePinia } from 'pinia'

import { state } from './state'
import { actions } from './actions'

export const useFiltersStore = () => {
  const init = defineStore('filtersMain', {
    state,
    actions,
  })

  return init(getActivePinia())
}