<<<<<<< HEAD
const connection = require('../config/databaseConnection')
=======
const connection = require('./databaseConnection')
>>>>>>> beb8897128b9b95f1a00406e423da36212e24942

let usersRegistrationSchema = new connection.Schema({
  userId: {
    type: String,
    require: true
  },
  emailUser: {
    type: String,
    required: true
  },
  passwordUser: {
    type: String,
    required: true
  },
  passwordUser2: {
    type: String,
    required: true
  }
})

let users = connection.model('users', usersRegistrationSchema)

module.exports = users
