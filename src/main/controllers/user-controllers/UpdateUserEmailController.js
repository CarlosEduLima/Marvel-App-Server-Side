const { GetUserCase } = require('../../../domain/user-cases/GetUserCase')
const { UpdateUserEmailCase } = require('../../../domain/user-cases/UpdateUserEmailCase')
const HttpResponse = require('../../../presentation/helpers/http-response')
module.exports = {
  async UpdateUserEmailController (httpRequest) {
    const validation = await GetUserCase(httpRequest)
    if (!validation.validated) {
      const HttpResponse = validation.error
      return HttpResponse
    }

    const updateUserEmail = await UpdateUserEmailCase(validation.user, httpRequest.body.email)
    if (!updateUserEmail.validated) {
      const HttpResponse = updateUserEmail.error
      return HttpResponse
    }
    return HttpResponse.ok('User Email updated')
  }
}
