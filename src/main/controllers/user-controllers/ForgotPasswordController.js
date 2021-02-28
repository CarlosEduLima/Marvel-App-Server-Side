const { ForgotPasswordCase } = require('../../../domain/user-cases/ForgotPasswordCase')
const HttpResponse = require('../../../presentation/helpers/http-response')
const UserDb = require('../../../infra/users')
require('dotenv').config()
const TokenGenerator = require('../../../utils/token-generator')
module.exports = {
  async ForgotPasswordController (httpRequest) {
    const validation = await ForgotPasswordCase(httpRequest)
    if (!validation.validated) {
      const HttpResponse = validation.error
      return HttpResponse
    }

    const token = await TokenGenerator.generate(process.env.SECRET, validation.userData.id, 60 * 30)
    const response = await UserDb.updateUserPasswordToken(validation.userData, token)

    if (!response.success) {
      return HttpResponse.serverError()
    }

    return HttpResponse.ok('Token gerado')
  }
}
