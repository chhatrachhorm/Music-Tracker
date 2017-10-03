module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'TabTrackerAdmin',
    password: process.env.DB_PASS || 'TabTrackerAdmin',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || '127.0.0.1',
      port: process.env.PORT || 3308
    }
  }
}
