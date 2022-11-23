const express = require('express');
const router = express.Router();
const chargesController = require('../controllers/chargesController');

const app = express();

router.get('/cobranca', chargesController.listarCobranca );

router.get('/cobranca/:id', chargesController.listarCobrancaPorId );

router.put('/cobranca/:id',chargesController.atualizarCobrancaPorId);

router.post('/cobranca/criar', chargesController.criarCobranca);

router.delete('/cobranca/:id', chargesController.deletarCobranca);

module.exports = router;