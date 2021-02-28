const { GetUserCase } = require('../../../domain/user-cases/GetUserCase')
const { UpdateUserPasswordCase } = require('../../../domain/user-cases/UpdateUserPasswordCase')
const HttpResponse = require('../../../presentation/helpers/http-response')
const { InvalidParamError } = require('../../../utils/errors')
const { createHash } = require('../../../utils/encrypter')
const UserDb = require('../../../infra/users')
module.exports = {
  async UpdateUserPasswordController (httpRequest) {
    const validation = await GetUserCase(httpRequest)
    if (!validation.validated) {
      const HttpResponse = validation.error
      return HttpResponse
    }
    const checkedPassword = await UpdateUserPasswordCase(validation.user, httpRequest.body.oldPassword)
    if (!checkedPassword.success) {
      return HttpResponse.badRequest(new InvalidParamError('Password'))
    }
    const passwordHash = await createHash(httpRequest.body.newPassword)
    if (!passwordHash) {
      return HttpResponse.serverError()
    }
    const response = await UserDb.updateUserPassword(validation.user, passwordHash)
    if (!response.success) {
      return HttpResponse.serverError()
    }
    return HttpResponse.ok('Senha alterada')
  }
}
