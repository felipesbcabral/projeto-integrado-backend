const express = require('express');
const router = express.Router();
const chargesController = require('../controllers/chargesController');

const app = express();

router.get('/', chargesController.listarCobranca );

router.get('/:id', chargesController.listarCobrancaPorId );

router.put('/cobranca/:id',chargesController.atualizarCobrancaPorId);

router.post('/cobranca', chargesController.criarCobranca);

router.delete('/cobranca/:id', chargesController.deletarCobranca);

module.exports = router;