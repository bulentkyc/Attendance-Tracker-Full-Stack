const connection = require('../config/databaseConnection')

let roleRegistration = new connection.Schema({
  title: {
    type: String,
    required: true
  }
})

exports.classes = connection.model('roles', roleRegistration)
