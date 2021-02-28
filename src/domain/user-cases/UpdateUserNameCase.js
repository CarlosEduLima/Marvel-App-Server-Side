const HttpResponse = require('../../presentation/helpers/http-response')
const UserDb = require('../../infra/users')
module.exports = {
  async UpdateUserNameCase (user, name) {
    try {
      if (!name || !user) {
        return {
          validated: false,
          error: HttpResponse.serverError()
        }
      }
      const response = await UserDb.updateUserName(user, name)
      if (!response.success) {
        return { validated: false, error: HttpResponse.serverError() }
      }
      return {
        validated: true
      }
    } catch (e) {
      return HttpResponse.serverError()
    }
  }
}
