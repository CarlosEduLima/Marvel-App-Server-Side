const HttpResponse = require('../../presentation/helpers/http-response')
const UserDb = require('../../infra/users')
module.exports = {
  async UpdateUserEmailCase (user, email) {
    try {
      if (!email || !user) {
        return {
          validated: false,
          error: HttpResponse.serverError()
        }
      }
      const response = await UserDb.updateUserEmail(user, email)
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
