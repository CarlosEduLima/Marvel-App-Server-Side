const { GetUserCase } = require('../../../domain/user-cases/GetUserCase')
const { DeleteUserCase } = require('../../../domain/user-cases/DeleteUserCase')
const HttpResponse = require('../../../presentation/helpers/http-response')
const { InvalidParamError } = require('../../../utils/errors')
const UserDb = require('../../../infra/users')
module.exports = {
  async DeleteUserController (httpRequest) {
    const validation = await GetUserCase(httpRequest)
    if (!validation.validated) {
      const { error } = validation
      return error
    }
    const checkPassword = DeleteUserCase(validation.user, httpRequest.body.password)
    if (!checkPassword) {
      return HttpResponse.badRequest(new InvalidParamError('Password'))
    }
    const response = await UserDb.deleteUser(validation.user)
    if (!response.success) {
      return HttpResponse.serverError()
    }
    return HttpResponse.ok('User Deleted')
  }
}
