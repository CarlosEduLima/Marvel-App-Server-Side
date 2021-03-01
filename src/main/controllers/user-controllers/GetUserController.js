const { GetUserCase } = require('../../../domain/user-cases/GetUserCase')
const HttpResponse = require('../../../presentation/helpers/http-response')
module.exports = {
  async GetUserController (httpRequest) {
    const validation = await GetUserCase(httpRequest)
    if (!validation.validated) {
      const { erro } = validation
      return erro
    }
    return HttpResponse.ok(validation)
  }
}
