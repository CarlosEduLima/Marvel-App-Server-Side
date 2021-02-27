const adpter = require('../config/express-router-adpter')
const addUserRoute = require('../../presentation/routers/add-user-router')
module.exports = router => {
  router.get('/test', adpter(addUserRoute()))
}
