<template>
  <app-customer-main/>
</template>

<script>
import { useBem } from '@/composables/use'

import { AppCustomerMain } from '@/modules/customer/components/main'

export default {
  name: 'app-profile-page',
  components: {
    AppCustomerMain,
  },
  setup() {
    const b = useBem('app-profile-page')

    return {
      b,
    }
  }
}
</script>