import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useBem } from "@/composables/use"

export default {
  name: 'app-breadcrumbs',
  components: {
    RouterLink,
  },
  props: {
    crumbs: {
      type: Array,
      default: [],
    },
  },
  setup(props) {
    const b = useBem('app-breadcrumbs')

    const crumbsInternal = computed(() => props.crumbs.slice(1))

    return {
      b,

      crumbsInternal,
    }
  }
}