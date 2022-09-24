const express = require('express');
const router = express.Router();
const chargesController = require('../controllers/chargesController');

const app = express();

router.get('/', chargesController.listarContas );

router.get('/:id', chargesController.listarContasPorId );

router.put('/:id',chargesController.atualizarContaPorId);

router.post('/', chargesController.criarCobranca);

router.delete('/:id', chargesController.deletarCobranca);

module.exports = router;