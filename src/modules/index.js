const express = require('express')
const router = express.Router()

const Admin = require('./admin/admin')
const {TOKEN}  = require('../middleware/middleware')

router 
      .post('/admin', Admin.LOGIN)

module.exports = router