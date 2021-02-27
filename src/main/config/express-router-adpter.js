
module.exports = function ExpressRouterAdapter (route) {
  return async (req, res) => {
    const httpRequest = {
      body: req.body
    }
    const httpResponse = await route(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
