import { defineStore, getActivePinia } from "pinia"

import { state } from './state'
import { actions } from './actions'

export const useNavStore = () => {
  const init = defineStore('navMain', {
    state,
    actions,
  })

  return init(getActivePinia())
}