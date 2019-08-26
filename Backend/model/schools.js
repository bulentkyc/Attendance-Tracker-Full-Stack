const connection = require('../config/databaseConnection')

let schoolSchema = new connection.Schema({
  schoolName: {
    type: String,
    required: false
  }
})

exports.school = connection.model('school', schoolSchema)
