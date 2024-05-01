import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useToast } from 'vue-toastification'

import { useMainStore } from '@/modules/core/stores/main'

const toast = useToast()

export const actions = {
  toggleAuthModal() {
    const mainStore = useMainStore()

    this.isAuthModalOpened = !this.isAuthModalOpened

    if (this.isAuthModalOpened) {
      mainStore.disableScroll()
    } else {
      mainStore.enableScroll()
    }
  },
  toggleActiveTab(activeTab) {
    this.activeTab = activeTab
  },
  registerUser(credentials) {
    const authInstance = getAuth()

    createUserWithEmailAndPassword(authInstance, credentials.email, credentials.password)
      .then(() => {
        this.user = authInstance.currentUser
        
        if (localStorage.getItem('user')) {
          //todo нотификация о том, что такой пользователь есть
        } else {
          localStorage.setItem('user', JSON.stringify(authInstance.currentUser))
        }

        this.isLoggedIn = true
        toast.success('Успешная регистрация')
        this.router.push('/')
      })
      .catch((error) => {
        this.isLoggedIn = false
        console.error(error.message)
      })
      .finally(() => {
        this.toggleAuthModal()
      })
  },
  authUser(credentials) {
    const authInstance = getAuth()

    signInWithEmailAndPassword(authInstance, credentials.email, credentials.password)
      .then(() => {
        this.user = authInstance.currentUser

        if (localStorage.getItem('user')) {
          //todo нотификация о том, что уже авторизован
        } else {
          localStorage.setItem('user', JSON.stringify(authInstance.currentUser))
        }

        this.isLoggedIn = true
        toast.success('Успешная авторизация')
        this.router.push('/')
      })
      .catch((error) => {
        console.error(error.message)
        this.isLoggedIn = false
        //todo Сделать свитч на разные error.message
    })
    .finally(() => {
      this.toggleAuthModal()
    })
  },
}