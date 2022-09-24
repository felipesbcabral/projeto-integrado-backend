const express = require('express');
const router = express.Router();
const chargesController = require('../controllers/chargesController');

const app = express();

router.get('/', chargesController.listarCobranca );

router.get('/:id', chargesController.listarCobrancaPorId );

router.put('/:id',chargesController.atualizarCobrancaPorId);

router.post('/', chargesController.criarCobranca);

router.delete('/:id', chargesController.deletarCobranca);

module.exports = router;