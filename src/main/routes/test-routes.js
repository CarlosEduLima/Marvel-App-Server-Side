const adpter = require('../config/express-router-adpter')

module.exports = router => {
  router.get('/test', adpter(function route (HttpRequest) {
    console.log(HttpRequest)
    const response = { statusCode: 200, body: { response: HttpRequest } }
    const HttpResponse = response
    return HttpResponse
  }))
}
