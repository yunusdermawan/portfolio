const express = require('express')
const router = express.Router()

const users = require('./users')
const educations = require('./educations')
const certifications = require('./certifications')
const experiences = require('./experiences')
const projects = require('./projects')
const skills = require('./skills')
const socials = require('./socials')
const userSkills = require('./userSkills')


router.use('/users', users)
router.use('/edu', educations)
router.use('/cert', certifications)
router.use('/exp', experiences)
router.use('/projects', projects)
router.use('/skills', skills)
router.use('/socials', socials)
router.use('/userSkills', userSkills)


module.exports = router