const connection = require('../config/databaseConnection')

let schoolSchema = new connection.Schema({
  schoolName: {
    type: String,
    required: false
  }
})


exports.classes = connection.model('school', schoolSchema);