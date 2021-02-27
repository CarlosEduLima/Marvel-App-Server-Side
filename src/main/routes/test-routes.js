const adpter = require('../config/express-router-adpter')
const { route } = require('../../presentation/routers/test-router')
module.exports = router => {
  router.get('/test', adpter(route))
}
