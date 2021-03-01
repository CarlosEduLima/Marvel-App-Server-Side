
module.exports = function ExpressRouterAdapter (router) {
  return async (req, res) => {
    const httpRequest = {
      body: req.body,
      params: req.params,
      headers: req.headers
    }
    const httpResponse = await router.route(httpRequest)
    res.json(httpResponse.body)
  }
}
