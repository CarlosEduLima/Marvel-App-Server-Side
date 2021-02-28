const { UpdateUserNameController } = require('../../main/controllers/user-controllers/UpdateUserNameController')
module.exports = function updateUserNameRoute () {
  return {
    async  route (HttpRequest) {
      const response = await UpdateUserNameController(HttpRequest)
      return response
    }
  }
}
