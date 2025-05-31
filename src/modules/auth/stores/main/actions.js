import { useToast } from 'vue-toastification'
import { Api } from '@/api'

import { useMainStore } from '@/modules/core/stores/main'
import { useCartStore } from '@/modules/cart/stores/main'
import { useUserMainStore } from '@/modules/user/stores'

const toast = useToast()
const api = new Api()

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
  async registerUser(credentials) {
    this.isPending = true

    try {
      const { data: credentialsData } = await api.post('auth/signup', {
        body: {
          email: credentials.email,
          password: credentials.password,
        }
      })
      await api.post('auth/login', {
        body: {
          email: credentials.email,
          password: credentials.password,
        }
      })

      localStorage.setItem('isLoggedIn', JSON.stringify(true))

      this.user = credentialsData
      this.isLoggedIn = true

      toast.success('Успешная регистрация')

      this.router.push('/')
    } catch (error) {
      this.isLoggedIn = false
      toast.error('Ошибка регистрации пользователя')
    } finally {
      this.toggleAuthModal()
        this.isPending = false
    }
        
  },

  async authUser(credentials) {
    const cartStore = useCartStore()
    const userStore = useUserMainStore()

    this.isPending = true

    try {
      await api.post('auth/login', {
        body: {
          ...credentials,
        },
        credentials: 'include'
      })

      localStorage.setItem('isLoggedIn', JSON.stringify(true))

      await userStore.fetchUserInfo()

      await cartStore.fetchCart()

      this.isLoggedIn = true
      toast.success('Успешная авторизация')
      this.router.push('/')
    } catch (error) {
      console.error(error)
      this.isLoggedIn = false
      toast.error('Ошибка авторизации пользователя')
    } finally {
      this.toggleAuthModal()
      this.isPending = false
    }
  },
  async signOut() {
    const cartStore = useCartStore()
    
    this.isPending = true
    try {
      await api.get('auth/logout', {
        credentials: 'include',
      })

      cartStore.items = []
      cartStore.totalCount = 0
      cartStore.updateLocalStorageCart()
      localStorage.removeItem('isLoggedIn')

      toast.success('Вы успешно вышли из аккаунта')
      this.isLoggedIn = false
    } catch (error) {
      toast.error(error.message)
    } finally {
      this.router.push('/')
      this.isPending = false
    }
  },

  async refreshTokens() {
    try {
      await api.post('auth/refresh', {
      credentials: 'include',
    })
    } catch (error) {
      if (error.statusCode === 401) {
        this.router.push('/')
        this.isLoggedIn = false
        localStorage.removeItem('isLoggedIn')

        this.toggleAuthModal()
      }
    }
  }
}