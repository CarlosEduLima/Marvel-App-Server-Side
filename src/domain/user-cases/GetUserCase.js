const HttpResponse = require('../../presentation/helpers/http-response')
const { MissingParamError, InvalidParamError } = require('../../utils/errors')
const UserDb = require('../../infra/users')
module.exports = {
  async GetUserCase (userId) {
    try {
      if (!userId) {
        return {
          validated: false,
          error: HttpResponse.serverError()
        }
      }
      const { id } = userId.params
      if (!id) {
        return {
          validated: false,
          error: HttpResponse.badRequest(new MissingParamError('id'))
        }
      }
      const databaseQuery = await UserDb.findUserById(id)
      if (!databaseQuery.user) {
        return {
          validated: false,
          error: HttpResponse.badRequest(new InvalidParamError('id'))
        }
      }
      return {
        validated: true,
        user: databaseQuery.user
      }
    } catch (e) {
      return HttpResponse.serverError()
    }
  }
}
