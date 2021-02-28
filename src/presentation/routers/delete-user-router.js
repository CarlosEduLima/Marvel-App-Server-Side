const { DeleteUserController } = require('../../main/controllers/user-controllers/DeleteUserController')
module.exports = function deleteUserRoute () {
  return {
    async  route (HttpRequest) {
      const response = await DeleteUserController(HttpRequest)
      return response
    }
  }
}
