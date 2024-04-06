import { defineStore, getActivePinia } from 'pinia'
import { state } from './state'
import { actions } from './actions'

export const useAuthStore = () => {
  const init = defineStore('auth', {
    state,
    actions,
  })

  return init(getActivePinia())
}