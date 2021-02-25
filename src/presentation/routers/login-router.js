const HttpResponse = require('../routers/helpers/http-response')

module.exports = class LoginRouter {
  route (httpResquest) {
    if (!httpResquest || !httpResquest.body) {
      return HttpResponse.serverError()
    }
    const { email, password } = httpResquest.body
    if (!email) {
      return HttpResponse.badRequest('email')
    }
    if (!password) {
      return HttpResponse.badRequest('password')
    }
  }
}