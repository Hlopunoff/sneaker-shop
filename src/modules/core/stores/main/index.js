import { defineStore, getActivePinia } from 'pinia'

import { state } from './state'
import { actions } from './actions'

export const useMainStore = () => {
  const init = defineStore('appMain', {
    state,
    actions,
  })

  return init(getActivePinia())
}