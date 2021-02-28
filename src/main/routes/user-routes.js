const adpter = require('../config/express-router-adpter')
const addUserRoute = require('../../presentation/routers/add-user-router')
const getUserRoute = require('../../presentation/routers/get-user-router')
const updateUserNameRoute = require('../../presentation/routers/update-user-name-router')
const updateUserEmailRoute = require('../../presentation/routers/update-user-email-router')
const deleteUserRouter = require('../../presentation/routers/delete-user-router')
const updateUserPasswordRouter = require('../../presentation/routers/update-user-password-router')
module.exports = router => {
  router.post('/sign-up', adpter(addUserRoute()))
  router.get('/user/:id', adpter(getUserRoute()))
  router.put('/user-name/:id', adpter(updateUserNameRoute()))
  router.put('/user-email/:id', adpter(updateUserEmailRoute()))
  router.put('/reset-password/:id', adpter(updateUserPasswordRouter()))
  router.delete('/user/:id', adpter(deleteUserRouter()))
}
