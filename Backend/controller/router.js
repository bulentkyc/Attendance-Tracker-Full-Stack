const express = require('express')
const router = express.Router()
const newUser = require('./registrationForm')
// const controller = require('./contoller');

router.get('/registerUser', newUser.newUserForm)

module.exports = router
