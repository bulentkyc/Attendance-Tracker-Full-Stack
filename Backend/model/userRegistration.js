const connection = require('./databaseConnection')

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
