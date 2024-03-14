import { useBem } from "@/composables/use"

import { AppHomeCategoryList } from './children/category-list'

import { categories } from '../../mocks/categories'

export default {
  name: 'app-home-categories',
  components: {
    AppHomeCategoryList,
  },
  setup() {
    const b = useBem('app-home-categories')

    return {
      b,
      categories,
    }
  }
}