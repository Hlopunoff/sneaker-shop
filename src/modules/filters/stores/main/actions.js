import { useToast } from 'vue-toastification'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from "@/firebase"

const toast = useToast()

export const actions = {
  async getFilters(category) {
    this.resetFilters()
    try {
      const q = query(collection(db, 'products'), where('category', '==', category))

      const res = await getDocs(q)

      res.forEach((product) => {
        const productData = product.data()
        
        this.setColorFilter(productData.configuration.colors.values)
        this.setSizeFilter(productData.configuration.sizes.values)
        this.filters.brands.add(productData.brand)
      })
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