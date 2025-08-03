const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/projectController')


router.get('/', ctrl.getProjects)


module.exports = router