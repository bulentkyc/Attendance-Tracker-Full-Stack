const users = require('../model/users')
const jwt = require('jsonwebtoken')

exports.login = (req, res) => {
  let userLogin = {
    email: req.body.email,
    password: req.body.password
  }

  let errors = []

  if (!email) {
    errors.push('Enter email address')
  }
  if (password.trim().length < 6) {
    errors.push('Password must be at least 6 characters')
    res.json({
      status: 'error',
      errors
    })
  } else {
    users.findOne({ email: userLogin.email })
      .then((user) => {
        if (!user) {
          errors.push('That email is not registered')
          res.json({
            status: 'error'
          })
        } else 

          jwt.sign({ userLogin }), (err, token) => {
            if (err) {
              errors.push('Something happend with server please try again!')
              res.json({
                status: 'error'
              })
            } else
              {console.log(user['_doc'])}

            res.json({
              token,
              status: 'success',
              id: user['_doc']._id,
              name: user['_doc'].name,
              email: user['_doc'].email
            })
          }
        }
      })
  }
}
