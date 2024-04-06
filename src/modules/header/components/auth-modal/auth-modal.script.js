import { computed } from 'vue'

import { useBem } from "@/composables/use"
import { useAuthStore } from '../../stores'

export default {
  name: 'app-header-auth-modal',
  components: {},
  props: {
    isOpened: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const b = useBem('app-header-auth-modal')
    const authStore = useAuthStore()

    const activeTab = computed(() => authStore.activeTab)
    const submitButtonLabel = computed(() => activeTab.value === 'auth' ? 'Авторизоваться' : 'Зарегистрироваться')

    const onModalClose = () => {
      authStore.toggleAuthModal()
    }

    const onTabClick = (tab) => {
      authStore.toggleActiveTab(tab)
    }

    return {
      b,
      onModalClose,
      onTabClick,
      activeTab,
      submitButtonLabel,
    }
  }
}