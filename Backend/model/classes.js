const connection = require('../config/databaseConnection')

let className = new connection.Schema({

  schoolId: {
    type: String,
    require: false
  },
  className: {
    type: String,
    require: false
  }
})

exports.classes = connection.model('classes', className);
