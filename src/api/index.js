import { ResponseWrapper, ErrorWrapper } from './wrappers'

export class Api {
  #baseUrl = 'http://localhost:4000/'

  async #request(url, options) {
    if (!url) {
      throw new Error(`Ошибка Апи: Неправильно передан url - ${url}`)
    }

    const urlInternal = new URL(`api/${url}`, this.#baseUrl)

    const optionsInternal = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
      }
    }  

    const response = await fetch(urlInternal.href, optionsInternal)

    if (!response.ok) {
      throw new ErrorWrapper(response)
    }

    const data = await response.json()

    return new ResponseWrapper(data)
  }

  async get(url, options = {}) {
    const optionsInternal = {
      ...options,
      method: 'GET',
    }

    return await this.#request(url, optionsInternal)
  }

  async post(url, options = {}) {
    const optionsInternal = {
      ...options,
      method: 'POST',
      body: JSON.stringify(options.body)
    }

    return await this.#request(url, optionsInternal)
  }

  async delete(url, options = {}) {
    const optionsInternal = {
      ...options,
      method: 'DELETE',
      body: JSON.stringify(options.body)
    }

    return await this.#request(url, optionsInternal)
  }

  async patch(url, options = {}) {
    const optionsInternal = {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(options.body),
    }

    return await this.#request(url, optionsInternal)
  }
}