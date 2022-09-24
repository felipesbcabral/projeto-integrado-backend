const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

const app = express();

router.put('/', usersController.userAuthenticate );

module.exports = router;