const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/certificationController')


router.get('/', ctrl.getCertifications)


module.exports = router