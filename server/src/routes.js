const AuthenticationController = require('./controllers/AuthenticationController')
module.exports = (app) => {
  app.post('/register', (req, res) => {
    AuthenticationController.register()
  })
}
