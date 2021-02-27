const { connects } = require('../index')
const models = require('../sequelize/models')

const query = require('./query')

const usersDb = query({ connects, models })

module.exports = usersDb
