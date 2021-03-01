const { ForgotPasswordCase } = require('../../../domain/user-cases/ForgotPasswordCase')
const HttpResponse = require('../../../presentation/helpers/http-response')
const UserDb = require('../../../infra/users')
require('dotenv').config()
module.exports = {
  async ForgotPasswordController (httpRequest) {
    const validation = await ForgotPasswordCase(httpRequest)
    if (!validation.validated) {
      const { error } = validation
      return error
    }
    const response = await UserDb.updateUserPassword(validation.userData, httpRequest.newPassword)
    if (!response.success) {
      return HttpResponse.serverError()
    }

    return HttpResponse.ok('Senha atualizada')
  }
}
