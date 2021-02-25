const enviromentLocal = {
  username: 'postgres',
  password: 'postgres',
  database: 'marvel-app',
  host: '127.0.0.1',
  dialect: 'postgres',
  logging: true,
  define: {
    timestamps: true,
    underscored: true
  }
}

module.exports = enviromentLocal
