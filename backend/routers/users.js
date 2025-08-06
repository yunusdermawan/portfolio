const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/userController');


router.get('/', ctrl.getUsers);
router.get('/name', ctrl.getSingleUserByName)
router.post('/create', ctrl.createUser)

router.get('/:id', ctrl.getSingleUserById)
router.put('/:id', ctrl.updateUser)


module.exports = router;