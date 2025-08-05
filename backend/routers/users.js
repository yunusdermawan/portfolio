const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/userController');


router.get('/', ctrl.getUsers);
router.get('/:id', ctrl.getSingleUserById)
router.get('/name', ctrl.getSingleUserByName)
router.post('/create', ctrl.createUser)
router.put('/:id', ctrl.updateUser)


module.exports = router;