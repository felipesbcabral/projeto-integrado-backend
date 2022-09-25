const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.put('/', usersController.userAuthenticate );

module.exports = router;