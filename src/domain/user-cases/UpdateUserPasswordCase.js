const HttpResponse = require('../../presentation/helpers/http-response')
const UserDb = require('../../infra/users')
const { compareHash } = require('../../utils/encrypter')
module.exports = {
  async UpdateUserPasswordCase (user, httpRequest) {
    try {
      const { oldPassword } = httpRequest.body
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
          validated: false
        }
      }
      return { validated: true }
    } catch (e) {
      return HttpResponse.serverError()
    }
  }
}
