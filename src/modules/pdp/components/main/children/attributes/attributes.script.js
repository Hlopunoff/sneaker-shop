import { computed, toRefs, unref } from 'vue'

import { useBem } from "@/composables/use"
import { useCartStore } from '@/modules/cart/stores/main'
import { ITEM_PARAMS } from '@/modules/cart/constants'

export default {
  name: 'app-pdp-attributes',
  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    values: {
      type: Array,
      default: [],
    },
  },
  setup(props) {
    const { type } = toRefs(props)

    const b = useBem('app-pdp-attributes')
    const cartStore = useCartStore()

    const itemMods = computed(() => ({
      [unref(type)]: true
    }))
    const selectedConfig = computed(() => cartStore.itemConfiguration)

    const onAttrClick = (value) => {
      const attrName = unref(type) === ITEM_PARAMS.COLOR ? ITEM_PARAMS.COLOR : ITEM_PARAMS.SIZE
      const attrValue = unref(type) === ITEM_PARAMS.COLOR ? value.color : value

      cartStore.selectItemConfig(attrName, attrValue)
    }

    return {
      b,
      itemMods,
      onAttrClick,
      selectedConfig,
    }
  }
}