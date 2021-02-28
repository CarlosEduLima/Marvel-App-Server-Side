const { GetUserController } = require('../../main/controllers/user-controllers/GetUserController')
module.exports = function getUserRoute () {
  return {
    async  route (HttpRequest) {
      const response = await GetUserController(HttpRequest)
      return response
    }
  }
}
