const express = require('express');
const router = express.Router();
const notasController = require('../controllers/notasController');

const app = express();

router.get('/', notasController.listarNotas );

module.exports = router;