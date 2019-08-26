const users = require('../model/users')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

exports.newUserForm = (req, res, next) => {
  let errors = []

  bcrypt.hash(req.body.newUserPass, (err, hash) => {
    if (err) {
      errors.push(err)
    } else {
      let newUser = ({
        _id: new mongoose.Types.ObjectId(),
        newUserEmail: req.body.newUserEmail,
        newUserPass: hash
      });
      newUser
        .save()
        .then((user) => {
          let newProfile = ({
            newUser,
            newName : req.body.newName,
            newLastname : req.body.newLastname
          })
          console.log(newProfile)
          res.json({
            status: 'success',
            user
          })
        })
        .catch((err) => {
          console.log(err)
          res.json({
            status: 'error',
            err
          })
        }

        )
    }
  })
}
