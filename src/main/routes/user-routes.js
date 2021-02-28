const adpter = require('../config/express-router-adpter')
const addUserRoute = require('../../presentation/routers/add-user-router')
const getUserRoute = require('../../presentation/routers/get-user-router')
module.exports = router => {
  router.post('/sign-up', adpter(addUserRoute()))
  router.get('/user/:id', adpter(getUserRoute()))
}
