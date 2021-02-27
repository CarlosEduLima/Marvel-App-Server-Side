const HttpResponse = require('../../presentation/helpers/http-response')
const { MissingParamError, InvalidParamError } = require('../../utils/errors')
const UserDb = require('../../infra/users')
module.exports = {
  async AddUserCase (user) {
    try {
      if (!user) {
        return {
          validated: false,
          error: HttpResponse.serverError()
        }
      }
      const { email, password } = user.body
      if (!email) {
        return {
          validated: false,
          error: HttpResponse.badRequest(new MissingParamError('email'))
        }
      }
      if (!password) {
        return {
          validated: false,
          error: HttpResponse.badRequest(new MissingParamError('password'))
        }
      }
      const response = await UserDb.findUserByEmail(email)
      if (response.user) {
        return { validated: false, error: HttpResponse.badRequest(new InvalidParamError('Email já cadastrado')) }
      }
      return {
        validated: true
      }
    } catch (e) {
      return HttpResponse.serverError()
    }
  }
}
