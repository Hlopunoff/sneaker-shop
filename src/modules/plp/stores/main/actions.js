
import { useToast } from 'vue-toastification'
import { useFiltersStore } from '@/modules/filters/stores'
import { Api } from '@/api'

const toast = useToast()
const api = new Api()

export const actions = {
  async fetchProductsByCategory(category) {
    const filtersStore = useFiltersStore()
    filtersStore.resetSelectedFilters()
    try {
      this.isPending = true

      const { data } = await api.get(`catalog/${category}`)

      this.products = data.products
    } catch (error) {
      toast.error('Не удалось получить товары по категории', category, '\n', error.message)
    }
    finally {
      this.isPending = false
    }
  },
  async fetchProductsByFilters(category) {
    const filtersStore = useFiltersStore()
    try {
      this.isPending = true

      const { data } = await api.post('catalog/plp', {
        body: {
          category,
          brand: filtersStore.selectedFilters.brand,
          color: filtersStore.selectedFilters.colors,
          size: filtersStore.selectedFilters.sizes,
        }
      })
      this.products = data.products
    } catch (error) {
      toast.error(error.message)
    }
    finally {
      this.isPending = false
    }
  },
}