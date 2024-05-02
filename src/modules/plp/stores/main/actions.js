import { getDocs, collection, where, query } from 'firebase/firestore'
import { useToast } from 'vue-toastification'
import { db } from '@/firebase'
import { useFiltersStore } from '@/modules/filters/stores'
import { FILTERS } from '@/modules/filters/constants'

const toast = useToast()

export const actions = {
  async fetchProductsByCategory(category) {
    const filtersStore = useFiltersStore()
    filtersStore.resetSelectedFilters()
    try {
      this.isPending = true

      const q = query(collection(db, 'products'), where('category', '==', category))
      const res = await getDocs(q)

      const dataFormatted = res.docs.map((product) => {
        if (!product.exists()) {
          return
        }

        return {
          ...product.data(),
          id: product.id
        }
      })

      this.products = dataFormatted
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
      if (Object.values(filtersStore.selectedFilters).every((v) => v === null)) {
        this.fetchProductsByCategory(category)
        return
      }

      this.isPending = true

      const q = query(collection(db, 'products'), where('category', '==', category))
      const res = await getDocs(q)

      const selectedFiltersKeys = Object.keys(filtersStore.selectedFilters).filter((key) => filtersStore.selectedFilters[key])
      let data = res.docs.map((p) => {
        if (p.exists()) {
          return {
            id: p.id,
            ...p.data(),
          }
        }
      })

      while (selectedFiltersKeys.length) {
        const key = selectedFiltersKeys.pop()

        switch (key) {
          case FILTERS.BRAND:
            data = data.filter((p) => p.brand === filtersStore.selectedFilters[key])
            break
          case FILTERS.SIZES:
            data = data.filter((p) => p.configuration.sizes.values.includes(filtersStore.selectedFilters[key]))
            break
          case FILTERS.COLORS:
            data = data.filter((p) => p.configuration.colors.values.some(({value}) => value === filtersStore.selectedFilters[key]))
            break
        }
      }

      this.products = data
    } catch (error) {
      toast.error(error.message)
    }
    finally {
      this.isPending = false
    }
  },
}