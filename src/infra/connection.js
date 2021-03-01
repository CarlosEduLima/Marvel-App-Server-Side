// connection to database;
const connect = ({ dotenv, pg }) => {
  return async function conn () {
    dotenv.config()
    const { Pool } = pg
    let config = null
    const env = process.env.NODE_ENV
    if (env === 'development') {
      config = {
        user: process.env.LOCAL_DB_USERNAME,
        database: process.env.LOCAL_DB_DATABASE,
        password: process.env.LOCAL_DB_PASSWORD,
        host: process.env.LOCAL_DB_HOST
      }
    }
    if (env === 'production') {
      config = {
        user: process.env.PRODUCTION_DB_USERNAME,
        database: process.env.PRODUCTION_DB_DATABASE,
        password: process.env.PRODUCTION_DB_PASSWORD,
        port: process.env.PRODUCTION_DB_PORT,
        host: process.env.PRODUCTION_DB_HOST
      }
    }

    if (env === 'test') {
      config = {
        user: process.env.PGUSER,
        database: process.env.PGDATABASE_TEST,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT,
        host: process.env.PGHOST
      }
    }

    const pool = new Pool(config)

    return pool
  }
}

module.exports = connect
