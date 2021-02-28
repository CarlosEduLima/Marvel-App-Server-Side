const HttpResponse = require('../../presentation/helpers/http-response')
const UserDb = require('../../infra/users')
const { compareHash } = require('../../utils/encrypter')
const { InvalidParamError } = require('../../utils/errors')
module.exports = {
  async UpdateUserPasswordCase (user, httpRequest) {
    try {
      const { token, oldPassword } = httpRequest.body
      if (!oldPassword || !user || !token) {
        return {
          validated: false,
          error: HttpResponse.serverError()
        }
      }
      if (token !== user.reset_password_token) {
        return {
          validated: false,
          error: HttpResponse.badRequest(new InvalidParamError('Token inválido'))
        }
      }
      const passwordHash = await UserDb.getUserPassword(user.id)
      const validatePassword = await compareHash(oldPassword, passwordHash.password)
      if (!validatePassword) {
        return {
          validated: false
        }
      }
      return { validated: true }
    } catch (e) {
      return HttpResponse.serverError()
    }
  }
}
