const enviromentLocal = {
  username: process.env.LOCAL_DB_USERNAME,
  password: process.env.LOCAL_DB_PASSWORD,
  database: process.env.LOCAL_DB_DATABASE,
  host: process.env.LOCAL_DB_HOST,
  dialect: 'postgres',
  logging: true,
  define: {
    timestamps: true
  }
}
module.exports = enviromentLocal
