const { AuthUserCase } = require('../../../domain/user-cases/AuthUserCase')
const HttpResponse = require('../../../presentation/helpers/http-response')
require('dotenv').config()
const TokenGenerator = require('../../../utils/token-generator')
module.exports = {
  async AuthUserController (httpRequest) {
    const validation = await AuthUserCase(httpRequest)
    if (!validation.validated) {
      const { error } = validation
      return error
    }

    const token = await TokenGenerator.generate(process.env.SECRET, validation.user.id, 60 * 60 * 24)

    return HttpResponse.ok({ token: token, user: validation.user })
  }
}
