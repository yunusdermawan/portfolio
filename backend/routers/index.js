const express = require('express')
const router = express.Router()

const users = require('./users')
const educations = require('./educations')
const certifications = require('./certifications')
const experiences = require('./experiences')
const projects = require('./projects')


router.use('/users', users)
router.use('/edu', educations)
router.use('/cert', certifications)
router.use('/exp', experiences)
router.use('/projects', projects)


module.exports = router