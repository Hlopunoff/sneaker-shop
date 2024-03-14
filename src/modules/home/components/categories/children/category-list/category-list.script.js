import { computed, toRefs } from 'vue'

import { AppHomeCategoryItem } from '../category-item'

import { useBem } from "@/composables/use"
import { formatNumber } from "@/utils/formatNumber"

import { CATEGORIES } from './scripts/const'

export default {
  name: 'app-home-category-list',
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    AppHomeCategoryItem,
  },
  setup(props) {
    const b = useBem('app-home-category-list')
    const { categories } = toRefs(props)

    const categoriesInternal = computed(() => categories.value.map((category) => {
      let currentCategoryClass

      switch (category.type) {
        case CATEGORIES.TRAINERS:
          currentCategoryClass = b('category', { trainers: true })
          break
        case CATEGORIES.TRAUSERS:
          currentCategoryClass = b('category', { trausers: true })
          break
        case CATEGORIES.SHIRTS:
          currentCategoryClass = b('category', { shirts: true })
          break
        case CATEGORIES.HOODIES:
          currentCategoryClass = b('category', { hoodies: true })
          break
        case CATEGORIES.DELIVERIES:
          currentCategoryClass = b('category', { deliveries: true })
          break
        default:
          currentCategoryClass = b('category')
      }

      return {
        ...category,
        class: currentCategoryClass,
        productMinPrice: category.productMinPrice ? `от ${formatNumber(category.productMinPrice, {showCurrency: true})}` : null,
      }
    }))

    return {
      b,

      categoriesInternal,
    }
  }
}