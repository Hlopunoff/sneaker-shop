import { useBem } from "@/composables/use"

export default {
  name: 'app-footer-menu-list',
  props: {},
  components: {},
  setup() {
    const b = useBem('app-footer-menu-list')

    return {
      b,
    }
  }
}