const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/skillController')


router.get('/', ctrl.getSkills)


module.exports = router