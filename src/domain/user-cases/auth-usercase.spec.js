const { AuthUserCase } = require('./AuthUserCase')
const { ServerError } = require('../../presentation/errors')
const { MissingParamError } = require('../../utils/errors')

describe('Auth User Case', () => {
  test('should return 400 if no email is provided', async () => {
    const httpResquest = {
      body: {
        password: 'password'
      }
    }
    const httpResponse = await AuthUserCase(httpResquest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('should return 400 if no password is provided', async () => {
    const httpResquest = {
      body: {
        email: 'email'
      }
    }
    const httpResponse = await AuthUserCase(httpResquest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('should return 500 if no httpRequest is provided', async () => {
    const httpResponse = await AuthUserCase()

    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toEqual(new ServerError())
  })

  test('should return 500 if no httpRequest body has no body', async () => {
    const httpRequest = {}
    const httpResponse = await AuthUserCase(httpRequest)

    expect(httpResponse.statusCode).toBe(500)
    expect(httpResponse.body).toEqual(new ServerError())
  })
})
