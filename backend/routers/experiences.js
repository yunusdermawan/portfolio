const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/experienceController')


router.get('/', ctrl.getExperiences)


module.exports = router