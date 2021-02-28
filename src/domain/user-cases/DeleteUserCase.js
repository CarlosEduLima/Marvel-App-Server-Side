const HttpResponse = require('../../presentation/helpers/http-response')
const UserDb = require('../../infra/users')
const { compareHash } = require('../../utils/encrypter')
module.exports = {
  async DeleteUserCase (user, password) {
    try {
      if (!password || !user) {
        return {
          validated: false,
          error: HttpResponse.serverError()
        }
      }
      const passwordHash = await UserDb.getUserPassword(user.id)
      const validatePassword = await compareHash(password, passwordHash.password)
      if (!validatePassword) {
        return {
          success: false
        }
      }
    } catch (e) {
      return HttpResponse.serverError()
    }
  }
}
