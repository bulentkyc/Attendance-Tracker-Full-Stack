const users = require('../model/profiles')
// const classes = require('../model/classes')
const roles = require('../model/roles')
// const school = require('../model/schools')

exports.newProfile = (req, res) => {
  
  let userDetails = users.findOne({ userId:userId, email:email })
  let rolesDetails = roles.findOne({ title })
  let  registerProfile = {
    name : req.body.name,
    lastname: req.body.lastname,
    avatar : req.body.avatar
    } 
    
  let errors = []

  if()



}
