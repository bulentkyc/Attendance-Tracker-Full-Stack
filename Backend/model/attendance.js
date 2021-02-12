const connection = require('../config/databaseConnection')

const attendanceUser = new connection.Schema({
  userId: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true
  },
  in_time: {
    type: Date.UTC,
    require: true
  },
  out_time: {
    type: Date.UTC,
    require: true
  }
})

exports.attendance = connection.model('attendance', attendanceUser)
