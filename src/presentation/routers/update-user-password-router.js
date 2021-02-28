const { UpdateUserPasswordController } = require('../../main/controllers/user-controllers/UpdateUserPasswordController')
module.exports = function updateUserPasswordRoute () {
  return {
    async  route (HttpRequest) {
      const response = await UpdateUserPasswordController(HttpRequest)
      return response
    }
  }
}
