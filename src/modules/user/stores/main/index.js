import { defineStore, getActivePinia } from "pinia"
import { state } from './state'
import { actions } from './actions'

export const useUserMainStore = () => {
  const init = defineStore('userMain', {
    state,
    actions,
  })

  return init(getActivePinia())
}