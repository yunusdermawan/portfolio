const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');
const projectController = require('../controllers/ProjectController');
const skillController = require('../controllers/SkillController');
const contactMessageController = require('../controllers/ContactMessageController');

// User routes
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);

// Project routes
router.get('/projects', projectController.getAllProjects);
router.post('/projects', projectController.createProject);

// Skill routes
router.get('/skills', skillController.getAllSkills);
router.post('/skills', skillController.createSkill);

// Contact Message routes
router.get('/messages', contactMessageController.getAllMessages);
router.post('/messages', contactMessageController.createMessage);

module.exports = router;
