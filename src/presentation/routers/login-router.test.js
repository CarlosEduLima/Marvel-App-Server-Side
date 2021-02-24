class LoginRouter {
  route (httpResquest) {
    if (!httpResquest.email) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('Login Router', () => {
  test('should return 400 if no email is provided', () => {
    const sut = new LoginRouter()
    const httpResquest = {
      body: {
        password: 'password'
      }
    }
    const httpResponse = sut.route(httpResquest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
