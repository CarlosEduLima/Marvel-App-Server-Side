const getTestCase = require('../../../business-rule/test-cases/get-test-case')
module.exports = {
  async getTest (data) {
    const validadeData = getTestCase.getTestCase(data)
    return validadeData
  }
}
