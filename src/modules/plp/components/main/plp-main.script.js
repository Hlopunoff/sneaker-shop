import { useRoute } from "vue-router"
import { useBem } from "@/composables/use"

import { AppPlpListing } from "../listing"

export default {
  name: 'app-plp-main',
  components: {
    AppPlpListing,
  },
  setup() {
    const b = useBem('app-plp-main')
    
    const { matched } = useRoute()
    

    return {
      b,
      matched,
    }
  }
}