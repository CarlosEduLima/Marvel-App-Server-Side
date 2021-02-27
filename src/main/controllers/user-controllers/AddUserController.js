const { AddUserCase } = require('../../../domain/user-cases/AddUserCase')
const HttpResponse = require('../../../presentation/helpers/http-response')
const UserDb = require('../../../infra/users')
module.exports = {
  async AddUserController (httpRequest) {
    const validation = await AddUserCase(httpRequest)
    if (!validation.validated) {
      const HttpResponse = validation.error
      return HttpResponse
    }

    const databaseResponse = await UserDb.insertNewUser(httpRequest.body)

    if (!databaseResponse.success) {
      return HttpResponse.serverError()
    }

    return HttpResponse.ok()
  }
}
