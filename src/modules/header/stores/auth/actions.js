import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
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
        switch (error.code) {
          case 'auth/email-already-in-use':
            console.error(error)
            toast.error('Пользователь с такими данными уже зарегистирован')
            break
          case 'auth/invalid-email':
            console.error(error)
            toast.error('Неверный формат почты')
            break
          case 'auth/weak-password':
            console.error(error)
            toast.error('Пароль слишком слабый!\nПридумайте другой')
            break
          default:
            console.error(error)
            toast.error('Произошла ошибка при создании пользователя\nПопробуйте еще раз')
        }
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
        this.isLoggedIn = false

        switch (error.code) {
          case 'auth/user-not-found':
            console.error(error)
            toast.error('Пользователь с таким email не найден')
            break
          case 'auth/wrong-password':
            console.error(error)
            toast.error('Неверный пароль')
            break
          case 'auth/invalid-email':
            console.error(error)
            toast.error('Неверный формат почты')
            break
          case 'auth/user-disabled':
            console.error(error)
            toast.error('Учетная запись пользователя откоючена')
            break
          default:
            console.error(error)
            toString.error('Ошибка авторизации пользователя')
        }
    })
    .finally(() => {
      this.toggleAuthModal()
    })
  },
  async signOut() {
    const auth = getAuth()
    try {
      await signOut(auth)
      localStorage.removeItem('user')

      toast.success('Вы успешно вышли из аккаунта')
      this.isLoggedIn = false
    } catch (error) {
      toast.error(error.message)
    } finally {
      this.router.push('/')
    }
  }
}