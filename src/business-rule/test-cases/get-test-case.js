module.exports = {
  async getTestCase (data) {
    if (!data) {
      return {
        statusCode: 400,
        body: 'no passed in test'
      }
    } else {
      return {
        statusCode: 200,
        body: 'passed in test'
      }
    }
  }
}
