const express = require('express');
const router = express.Router();
const requerimentosController = require('../controllers/requerimentosController');

const app = express();

router.get('/', requerimentosController.listarRequerimentos );

router.get('/:id', requerimentosController.listarRequerimentosPorId );

router.post('/', requerimentosController.criarRequerimentos );

module.exports = router;