const { AddUserCase } = require('../../../domain/user-cases/AddUserCase')
const HttpResponse = require('../../../presentation/helpers/http-response')
const UserDb = require('../../../infra/users')
const { createHash } = require('../../../utils/encrypter')
module.exports = {
  async AddUserController (httpRequest) {
    const validation = await AddUserCase(httpRequest)
    if (!validation.validated) {
      const HttpResponse = validation.error
      return HttpResponse
    }

    const passwordHash = await createHash(httpRequest.body.password)
    if (!passwordHash) {
      return HttpResponse.serverError()
    }
    httpRequest.body.password = passwordHash

    const databaseResponse = await UserDb.insertNewUser(httpRequest.body)

    if (!databaseResponse.success) {
      return HttpResponse.serverError()
    }

    return HttpResponse.ok('Usuário criado com sucesso')
  }
}
