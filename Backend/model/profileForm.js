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
    require: true
  },
  schoolId: {
    type: String,
    require: true
  }
})

let userProfile = connection.model('students', profileFormSchema)

module.exports = userProfile
