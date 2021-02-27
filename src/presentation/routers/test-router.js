// const TestController = require('../../main/controllers/test-controllers/get-test-controller.js')
const userDb = require('../../infra/users/index')
module.exports = {
  async route (HttpRequest) {
    const response = await userDb.insertNewUser(HttpRequest)
    return {
      statusCode: 200,
      body: response
    }
  }
}
