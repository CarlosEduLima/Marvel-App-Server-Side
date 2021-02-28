const HttpResponse = require('../../presentation/helpers/http-response')
const UserDb = require('../../infra/users')
module.exports = {
  async UpdadeUserNameCase (name) {
    try {
      if (!name) {
        return {
          validated: false,
          error: HttpResponse.serverError()
        }
      }
      const response = await UserDb.updateUserName(name)
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
