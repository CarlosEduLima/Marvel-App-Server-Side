const { GetUserCase } = require('../../../domain/user-cases/GetUserCase')
const { UpdateUserNameCase } = require('../../../domain/user-cases/UpdateUserNameCase')
const HttpResponse = require('../../../presentation/helpers/http-response')
module.exports = {
  async UpdateUserNameController (httpRequest) {
    const validation = await GetUserCase(httpRequest)
    if (!validation.validated) {
      const HttpResponse = validation.error
      return HttpResponse
    }

    const updateUserName = await UpdateUserNameCase(validation.user, httpRequest.body.name)
    if (!updateUserName.validated) {
      const HttpResponse = updateUserName.error
      return HttpResponse
    }
    return HttpResponse.ok('User name updated')
  }
}
