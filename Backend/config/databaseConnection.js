const mongoose = require('mongoose')

// database connection : by Atlas
mongoose.connect(`mongodb+srv://FBW6:DCI12345@cluster0-fkht0.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true })

module.exports = mongoose
