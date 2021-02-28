const { GetUserCase } = require('../../../domain/user-cases/GetUserCase')
const { UpdateUserNameCase } = require('../../../domain/user-cases/UpdateUserNameCase')
const HttpResponse = require('../../../presentation/helpers/http-response')
module.exports = {
  async GetUserController (httpRequest) {
    const user = await GetUserCase(httpRequest)
    if (!user.validated) {
      const HttpResponse = user.error
      return HttpResponse
    }

    const updateUserName = await UpdateUserNameCase(user, httpRequest.body.name)
    if (!updateUserName.validated) {
      const HttpResponse = updateUserName.error
      return HttpResponse
    }
    return HttpResponse.ok('User name updated')
  }
}
