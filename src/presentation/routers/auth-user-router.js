const { AuthUserController } = require('../../main/controllers/user-controllers/AuthUserController')
module.exports = function AuthUserRoute () {
  return {
    async  route (HttpRequest) {
      const response = await AuthUserController(HttpRequest)
      return response
    }
  }
}
