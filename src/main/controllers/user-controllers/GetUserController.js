const { GetUserCase } = require('../../../domain/user-cases/GetUserCase')
const HttpResponse = require('../../../presentation/helpers/http-response')
module.exports = {
  async GetUserController (httpRequest) {
    const validation = await GetUserCase(httpRequest)
    if (!validation.validated) {
      const HttpResponse = validation.error
      return HttpResponse
    }

    return HttpResponse.ok(validation)
  }
}
