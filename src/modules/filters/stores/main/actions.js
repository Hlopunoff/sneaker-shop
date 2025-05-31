import { useToast } from 'vue-toastification'
import { Api } from '@/api'

const toast = useToast()
const api = new Api()

export const actions = {
  async getFilters(category) {
    this.resetFilters()
    try {
      const { data } = await api.post('catalog/filters', {
        body: {
          category,
        }
      })

      this.filters.colors = data.colors
      this.filters.sizes = data.sizes
      this.filters.brands = data.brands
    } catch (error) {
      toast.error(error.message)
    }
  },
  setSelectedFilter(filterName, filterValue) {
    this.selectedFilters[filterName] = filterValue
  },
  resetFilters() {
    for (const key of Object.keys(this.filters)) {
      this.filters[key] = new Set()
    }
  },
  resetSelectedFilters() {
    for (const key of Object.keys(this.selectedFilters)) {
      this.selectedFilters[key] = null
    }
  },
  setColorFilter(colors) {
    for (const value of colors.values()) {
      this.filters.colors.add(value.value)
    }
  },
  setSizeFilter(sizes) {
    for (const size of sizes) {
      this.filters.sizes.add(size)
    }
  },
}