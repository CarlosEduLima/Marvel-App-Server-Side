const { MissingParamError, InvalidParamError } = require('../../utils/errors')
const HttpResponse = require('../../presentation/helpers/http-response')
const { compareHash } = require('../../utils/encrypter')
const Userdb = require('../../infra/users')
module.exports = {
  async AuthUserCase (httpResquest) {
    try {
      const { email, password } = httpResquest.body
      if (!email) {
        return HttpResponse.badRequest(new MissingParamError('email'))
      }
      if (!password) {
        return HttpResponse.badRequest(new MissingParamError('password'))
      }
      const user = await Userdb.findUserByEmail(email)
      if (!user.user) {
        return {
          validated: false,
          error: HttpResponse.badRequest(new InvalidParamError('Email não existe'))
        }
      }
      const passwordHash = await Userdb.getUserPassword(user.user.id)
      const validatePassword = await compareHash(password, passwordHash.password)
      if (!validatePassword) {
        return {
          validated: false,
          error: HttpResponse.badRequest(new InvalidParamError('Senha incorreta'))
        }
      }

      return {
        validated: true,
        id: user.user.id
      }
    } catch (error) {
      console.log(error)
      return HttpResponse.serverError()
    }
  }
}
