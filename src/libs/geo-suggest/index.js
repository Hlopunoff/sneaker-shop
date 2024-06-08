export class GeoSuggest {
  #apiKey = '03f8c2b7-e40e-4dd2-933f-0bc355054b3d'
  #lang = 'ru'
  #baseUrl = `https://suggest-maps.yandex.ru/v1/suggest?apikey=${this.#apiKey}&lang=${this.#lang}&print_address=1`
  
  async getAddressSuggest(text) {
    if (!text) {
      throw new Error('Вы не ввели адрес')
    }

    const res = await fetch(`${this.#baseUrl}&text=${text}`)
    const data = await res.json()
    return data
  }
}