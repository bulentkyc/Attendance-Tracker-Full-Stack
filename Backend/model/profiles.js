const connection = require('../config/databaseConnection')

let profileFormSchema = new connection.Schema({
  userId: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  rolesId: {
    type: String,
    require: true
  },
  classId: {
    type: String,
    require: false
  },
  schoolId: {
    type: String,
    require: false
  }
})

exports.classes = connection.model('profiles', profileFormSchema);