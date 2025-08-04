const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/socialController')


router.get('/', ctrl.getSocials)


module.exports = router