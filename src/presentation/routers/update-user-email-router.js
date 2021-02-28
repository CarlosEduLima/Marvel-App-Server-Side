const { UpdateUserEmailController } = require('../../main/controllers/user-controllers/UpdateUserEmailController')
module.exports = function UpdateUserEmailRoute () {
  return {
    async  route (HttpRequest) {
      const response = await UpdateUserEmailController(HttpRequest)
      return response
    }
  }
}
