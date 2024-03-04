import { useBem } from '@/composables/use'

export default {
  name: 'app-nav-minimized',
  components: {},
  setup() {
    const b = useBem('nav-minimized')

    return {
      b,
    }
  }
}