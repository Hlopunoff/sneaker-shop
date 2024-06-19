import { computed, ref, unref } from 'vue'

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

    const email = ref('')
    const password = ref('')

    const activeTab = computed(() => authStore.activeTab)
    const submitButtonLabel = computed(() => activeTab.value === 'auth' ? 'Авторизоваться' : 'Зарегистрироваться')
    const isButtonDisabled = computed(() => authStore.isPending)

    const onModalClose = () => {
      authStore.toggleAuthModal()
    }

    const onTabClick = (tab) => {
      authStore.toggleActiveTab(tab)
    }

    const onSubmit = (event) => {
      event.preventDefault()

      if (unref(activeTab) === 'registration') {
        authStore.registerUser({email: unref(email), password: unref(password)})
      } else {
        authStore.authUser({email: unref(email), password: unref(password)})
      }
    }

    return {
      b,
      onModalClose,
      onTabClick,
      activeTab,
      submitButtonLabel,

      email,
      password,
      onSubmit,
      isButtonDisabled,
    }
  }
}