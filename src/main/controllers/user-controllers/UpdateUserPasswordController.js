const { GetUserCase } = require('../../../domain/user-cases/GetUserCase')
const { UpdateUserPasswordCase } = require('../../../domain/user-cases/UpdateUserPasswordCase')
const HttpResponse = require('../../../presentation/helpers/http-response')
const { InvalidParamError } = require('../../../utils/errors')
const UserDb = require('../../../infra/users')
module.exports = {
  async UpdateUserPasswordController (httpRequest) {
    const validation = await GetUserCase(httpRequest)
    if (!validation.validated) {
      const HttpResponse = validation.error
      return HttpResponse
    }
    const checkPassword = await UpdateUserPasswordCase(validation.user, httpRequest.body.oldPassword)
    if (!checkPassword) {
      return HttpResponse.badRequest(new InvalidParamError('Password'))
    }
    const response = await UserDb.updateUserPassword(validation.user, httpRequest.body.newPassword)
    if (!response.success) {
      return HttpResponse.serverError()
    }
    return HttpResponse.ok('Senha alterada')
  }
}
