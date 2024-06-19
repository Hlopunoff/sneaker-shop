import { computed, onMounted, unref } from "vue"

import { useBreakpoints } from "@vueuse/core"
import { useBem } from "@/composables/use"
import { AppButton } from "@/ui-components/button"

import { BREAKPOINTS } from "@/constants"

import { AppCustomerOrders } from "../orders"

import { useOrdersStore } from "../../stores/orders"
import { useAuthStore } from "@/modules/header/stores"

export default {
  name: 'app-customer-main',
  components: {
    AppCustomerOrders,
    AppButton,
  },
  setup() {
    const bp = useBreakpoints(BREAKPOINTS)
    const b = useBem('app-customer-main')
    const ordersStore = useOrdersStore()
    const authStore = useAuthStore()

    const fromDesktopSmall = computed(() => unref(bp.DESKTOP_SMALL))
    const isLogoutButtonDisabled = computed(() => authStore.isPending)

    const orders = computed(() => ordersStore.ordersFormatted)

    const onLogoutButtonClick = () => {
      authStore.signOut()
    }

    onMounted(() => {
      ordersStore.fetchOrders()
    })

    return {
      b,

      orders,
      fromDesktopSmall,
      onLogoutButtonClick,
      isLogoutButtonDisabled,
    }
  }
}