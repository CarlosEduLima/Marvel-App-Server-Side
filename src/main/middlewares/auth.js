const jwt = require('jsonwebtoken')
const HttpResponse = require('../../presentation/helpers/http-response')
const { InvalidParamError } = require('../../utils/errors')
const UserDb = require('../../infra/users')
require('dotenv').config()
module.exports = {
  async authentication (httpRequest) {
    const { authorization } = httpRequest.headers
    if (!authorization) {
      return {
        authenticated: false,
        error: HttpResponse.unauthorizedError()
      }
    }

    const parts = authorization.split(' ')
    if (!parts.length === 2) {
      return {
        authenticated: false,
        error: HttpResponse.unauthorizedError()
      }
    }

    const [schema, token] = parts

    if (!/^Bearer$/i.test(schema)) {
      return {
        authenticated: false,
        error: HttpResponse.unauthorizedError()
      }
    }
    await jwt.verify(token, process.env.SECRET, async (error, decoded) => {
      if (error) {
        return {

          authenticated: false,
          error: HttpResponse.unauthorizedError()
        }
      }

      const { _id } = decoded
      const user = await UserDb.findUserById(_id)
      if (!user) {
        return {
          authenticated: false,
          error: HttpResponse.badRequest(new InvalidParamError('id'))
        }
      }
    })
    return {
      authenticated: true
    }
  }

}
