const express = require('express');
const router = express.Router();
const faltasController = require('../controllers/faltasController');

const app = express();

router.get('/', faltasController.listarFaltas );

module.exports = router;