const connection = require('../config/databaseConnection')

let usersRegistrationSchema = new connection.Schema({
  emailUser: {
    type: String,
    required: true,
    unique;:true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
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

exports.users = connection.model('users', usersRegistrationSchema)

