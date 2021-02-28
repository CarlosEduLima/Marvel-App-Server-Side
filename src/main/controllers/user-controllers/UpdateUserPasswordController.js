const { GetUserCase } = require('../../../domain/user-cases/GetUserCase')
const { UpdateUserPasswordCase } = require('../../../domain/user-cases/UpdateUserPasswordCase')
const HttpResponse = require('../../../presentation/helpers/http-response')
const { createHash } = require('../../../utils/encrypter')
const UserDb = require('../../../infra/users')
module.exports = {
  async UpdateUserPasswordController (httpRequest) {
    const user = await GetUserCase(httpRequest)
    if (!user.validated) {
      const HttpResponse = user.error
      return HttpResponse
    }
    const validate = await UpdateUserPasswordCase(user.user, httpRequest)
    if (!validate.validated) {
      return validate.error
    }
    const passwordHash = await createHash(httpRequest.body.newPassword)
    if (!passwordHash) {
      return HttpResponse.serverError()
    }
    const response = await UserDb.updateUserPassword(user.user, passwordHash)
    if (!response.success) {
      return HttpResponse.serverError()
    }
    return HttpResponse.ok('Senha alterada')
  }
}
