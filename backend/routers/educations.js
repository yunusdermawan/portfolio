const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/educationController')


router.get('/', ctrl.getEducations)
router.get('/:id', ctrl.getEducationById)


module.exports = router