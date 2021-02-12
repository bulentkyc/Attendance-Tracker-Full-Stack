const express = require('express')
const router = express.Router()
const newUser = require('./userRegistrationAPI')
const userLogin = require('./userLoginAPI')
// const controller = require('./contoller');

router.get('/registerUser', newUser.newUserForm)
router.post('/login', userLogin.loginuser)

module.exports = router
