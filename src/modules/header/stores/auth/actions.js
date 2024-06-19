import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useToast } from 'vue-toastification'

import { useMainStore } from '@/modules/core/stores/main'
import { useCartStore } from '@/modules/cart/stores/main'

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
    this.isPending = true

    createUserWithEmailAndPassword(authInstance, credentials.email, credentials.password)
      .then(() => {
        this.user = authInstance.currentUser
        
        // if (localStorage.getItem('user')) {
        //   //todo нотификация о том, что такой пользователь есть
        // } else {
        //   localStorage.setItem('user', JSON.stringify(authInstance.currentUser))
        // }

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
        this.isPending = false
      })
  },
  authUser(credentials) {
    const authInstance = getAuth()
    const cartStore = useCartStore()

    this.isPending = true

    signInWithEmailAndPassword(authInstance, credentials.email, credentials.password)
      .then(async () => {
        this.user = authInstance.currentUser

        localStorage.setItem('user', JSON.stringify(authInstance.currentUser))

        await cartStore.fetchCart()

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
          case 'auth/invalid-credential':
            console.error(error)
            toast.error('Неверные данные')
            break
          case 'auth/missing-password':
            console.error(error)
            toast.error('Вы не ввели пароль')
            break
          default:
            console.error(error)
            toString.error('Ошибка авторизации пользователя')
        }
    })
    .finally(() => {
      this.toggleAuthModal()
      this.isPending = false
    })
  },
  async signOut() {
    const auth = getAuth()
    const cartStore = useCartStore()
    
    this.isPending = true
    try {
      await signOut(auth)
      cartStore.items = new Map()
      cartStore.totalCount = 0
      cartStore.updateLocalStorageCart()
      localStorage.removeItem('user')

      toast.success('Вы успешно вышли из аккаунта')
      this.isLoggedIn = false
    } catch (error) {
      toast.error(error.message)
    } finally {
      this.router.push('/')
      this.isPending = false
    }
  }
}