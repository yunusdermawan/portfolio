const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/userSkillController')


router.get('/', ctrl.getUserSkills)


module.exports = router