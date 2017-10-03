const {User} = require('../models')
module.exports = {
  async register(req, res){
    const user = await User.create(req.body.email)
    user.then(()=>{
      res.send(user.toJSON())
    })
        .catch(err=>{
          res.send(err)
    })
  }
}