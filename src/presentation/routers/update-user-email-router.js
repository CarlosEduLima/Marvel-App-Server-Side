const { UpdateUserEmailController } = require('../../main/controllers/user-controllers/UpdateUserEmailController')
const authMiddleware = require('../../main/middlewares/auth')
module.exports = function UpdateUserEmailRoute () {
  return {
    async  route (HttpRequest) {
      const authenticate = await authMiddleware.authentication(HttpRequest)
      if (!authenticate.authenticated) {
        const response = authenticate.error
        return response
      }
      const response = await UpdateUserEmailController(HttpRequest)
      return response
    }
  }
}
