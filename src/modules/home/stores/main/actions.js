import { Api } from '@/api'

const api = new Api()

export const actions = {
  async fetchSliderContent() {
    try {
      const {data} = await api.get('catalog/placements')

      this.sliderContent = data.products
    } catch (error) {
      console.error('Не удалось получить контент для слайдера', error.message)
    }
  }
}