const express = require('express');
const controller = require('../controllers/usersController')
const router = express.Router();
const autentica = require('../middleware/authMiddleware')

router.post('/registrar', controller.registrar);

router.post('/login', controller.login);

module.exports = router;
