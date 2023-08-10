const express = require('express')
const router = express.Router()
const {postcontact,postuser} = require('../controllers/index.controllers')
router.post('/identify' , postcontact)
router.post('/selfidentify' , postuser)

module.exports = router

