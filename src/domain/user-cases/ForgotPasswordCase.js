const { MissingParamError, InvalidParamError } = require('../../utils/errors')
const HttpResponse = require('../../presentation/helpers/http-response')
const Userdb = require('../../infra/users')
module.exports = {
  async ForgotPasswordCase (httpResquest) {
    try {
      const { email } = httpResquest.body
      if (!email) {
        return HttpResponse.badRequest(new MissingParamError('email'))
      }

      const user = await Userdb.findUserByEmail(email)
      if (!user.user) {
        return {
          validated: false,
          error: HttpResponse.badRequest(new InvalidParamError('Email não existe'))
        }
      }
      return {
        validated: true,
        userData: user.user
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }
}
