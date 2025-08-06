const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/certificationController')


router.get('/', ctrl.getCertifications)
router.get('/title', ctrl.getCertificationByTitle)
router.post('/create', ctrl.createCertification)

router.get('/:id', ctrl.getCertificationById)
router.put('/:id', ctrl.updateCertification)


module.exports = router