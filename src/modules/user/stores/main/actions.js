import { Api } from "@/api"
import { useAuthStore } from "@/modules/auth/stores"

const api = new Api()

export const actions = {
  async fetchUserInfo() {
    const auth = useAuthStore()

    try {
      const { data } = await api.get('user/info', {
        authRequired: true,
        credentials: 'include'
      })

      this.data = data
    } catch (error) {
      if (error.statusCode === 401) {
        await auth.refreshTokens()
      }
    }
  }
}