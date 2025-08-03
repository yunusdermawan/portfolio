const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/userController');


router.get('/', ctrl.getUsers);


module.exports = router;