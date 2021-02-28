const { ForgotPasswordController } = require('../../main/controllers/user-controllers/ForgotPasswordController')
module.exports = function ForgotPasswordRoute () {
  return {
    async  route (HttpRequest) {
      const response = await ForgotPasswordController(HttpRequest)
      return response
    }
  }
}
