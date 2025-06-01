export class ResponseWrapper {
  constructor(response) {
    this.data = response.data ?? response
  }
}

export class ErrorWrapper {
  constructor(error) {
    console.error(error)
    this.statusCode = error.status
    this.statusText = error.statusText
    this.message = this.getMessage(error)
  }

  getMessage(error) {
    const { url, status } = error
    
    switch (true) {
      case status >= 400 && status < 500 && url.includes('auth/login'):
        return 'Ошибка авторизации'
      case status >= 400 && status < 500 && url.includes('auth/signup'):
        return 'Ошибка регистрации'
      case url.includes('favorites/add'):
        return 'Не удалось добавить товар в избранное'
      case url.includes('favorites/delete'):
        return 'Не удалось удалить товар из избранного'
      default:
        return 'Произошла непредвиденная ошибка'
    }
  }
}