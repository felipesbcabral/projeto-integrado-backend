const express = require('express');
const router = express.Router();
const boletosController = require('../controllers/boletoController');

const app = express();

router.get('/', boletosController.listarContas );

router.get('/:id', boletosController.listarContasPorId );

module.exports = router;