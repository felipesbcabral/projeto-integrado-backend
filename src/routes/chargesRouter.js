const express = require('express');
const router = express.Router();
const chargesController = require('../controllers/chargesController');
const autentica = require('../middleware/authMiddleware')

const app = express();

router.get('/cobranca', autentica, chargesController.listarCobranca );

router.get('/cobranca/:id', autentica, chargesController.listarCobrancaPorId );

router.put('/cobranca/:id', autentica,chargesController.atualizarCobrancaPorId);

router.post('/cobranca/criar', autentica, chargesController.criarCobranca);

router.delete('/cobranca/:id', autentica, chargesController.deletarCobranca);

module.exports = router;