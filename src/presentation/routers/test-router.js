const TestController = require('../../main/controllers/test-controllers/get-test-controller.js')
module.exports = {
  async route (HttpRequest) {
    const response = await TestController.getTest(HttpRequest)
    return response
  }
}
