const LoginRouter = require('../routers/login-router')
const MissingParamError = require('../routers/helpers/missing-param-error')

// factore design pattern
const makeSut = () => {
  return new LoginRouter()
}
describe('Login Router', () => {
  test('should return 400 if no email is provided', () => {
    //  sut: system under test
    const sut = makeSut()
    const httpResquest = {
      body: {
        password: 'password'
      }
    }
    const httpResponse = sut.route(httpResquest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('should return 400 if no password is provided', () => {
    const sut = makeSut()
    const httpResquest = {
      body: {
        email: 'email'
      }
    }
    const httpResponse = sut.route(httpResquest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('should return 500 if no httpRequest is provided', () => {
    const sut = makeSut()
    const httpResponse = sut.route()

    expect(httpResponse.statusCode).toBe(500)
  })

  test('should return 500 if no body is provided', () => {
    const sut = makeSut()
    const httpRequest = {}
    const httpResponse = sut.route(httpRequest)

    expect(httpResponse.statusCode).toBe(500)
  })
})
