import { useBem } from '@/composables/use'

export default {
  name: 'main-layout',
  components: {},
  setup() {
    const b = useBem('main-layout')

    return {
      b,
    }
  }
}