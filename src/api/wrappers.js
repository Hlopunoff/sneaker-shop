export class ResponseWrapper {
  constructor(response) {
    this.data = response.data ?? response
  }
}

export class ErrorWrapper {
  constructor(error) {
    this.statusCode = error.status
    this.message = error.statusText
  }
}