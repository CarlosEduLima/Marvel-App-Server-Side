require('dotenv').config()

const env = process.env.NODE_ENV

const development = {
  user: process.env.LOCAL_DB_USERNAME,
  database: process.env.LOCAL_DB_DATABASE,
  password: process.env.LOCAL_DB_PASSWORD,
  host: process.env.LOCAL_DB_HOST,
  dialect: 'postgres',
  logging: true
}
const production = {
  username: 'root',
  password: null,
  database: 'database_production',
  host: '127.0.0.1',
  dialect: 'mysql'
}

module.exports = env === development ? development : production
