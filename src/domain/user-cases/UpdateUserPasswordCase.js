const HttpResponse = require('../../presentation/helpers/http-response')
const UserDb = require('../../infra/users')
const { compareHash } = require('../../utils/encrypter')
module.exports = {
  async UpdateUserPasswordCase (user, oldPassword) {
    try {
      if (!oldPassword || !user) {
        return {
          validated: false,
          error: HttpResponse.serverError()
        }
      }
      const passwordHash = await UserDb.getUserPassword(user.id)
      const validatePassword = await compareHash(oldPassword, passwordHash.password)
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
