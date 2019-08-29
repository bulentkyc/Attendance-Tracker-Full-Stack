const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

exports.newUserForm = (req, res, next) => {
  let errors = []

// random image from https://picsum.photos
  let randomImagenumber = Math.floor(Math.random() * 400)
  let imgChange = `https://picsum.photos/200/200?random=${randomImagenumber}`
  console.log(imgChange)
// end Random image
  
  bcrypt.hash(req.body.newUserPass, (err, hash) => {
    if (err) {
      errors.push(err)
    } else {
      let newUser = ({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.newUserEmail,
        password: hash
      })
      newUser
        .save((err, user) => {
          if (err) {
            errors.push(err)
            res.json({
              status: 'error'
            })
          } else {
            let newProfile = {
              _id: new mongoose.Types.ObjectId(),
              userId: user['_id'],
              name: req.body.newName,
              lastname: req.body.newLastname,
              email: req.body.newUserEmail,
              roleId: null,
              classId: null,
              schoolId: null,
              avatar: imgChange
            }
            console.log(newProfile)
            res.json({
              status: 'success'
            })
          }
        })
    }
  })
}
