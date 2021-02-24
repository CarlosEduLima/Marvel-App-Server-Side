class LoginRouter {
  route (httpResquest) {
    if (!httpResquest || !httpResquest.body) {
      return {
        statusCode: 500
      }
    }
    const { email, password } = httpResquest.body
    if (!email || !password) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('Login Router', () => {
  test('should return 400 if no email is provided', () => {
    //  sut: system under test
    const sut = new LoginRouter()
    const httpResquest = {
      body: {
        password: 'password'
      }
    }
    const httpResponse = sut.route(httpResquest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('should return 400 if no password is provided', () => {
    const sut = new LoginRouter()
    const httpResquest = {
      body: {
        email: 'email'
      }
    }
    const httpResponse = sut.route(httpResquest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('should return 500 if no httpRequest is provided', () => {
    const sut = new LoginRouter()
    const httpResponse = sut.route()

    expect(httpResponse.statusCode).toBe(500)
  })

  test('should return 500 if no body is provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {}
    const httpResponse = sut.route(httpRequest)

    expect(httpResponse.statusCode).toBe(500)
  })
})
