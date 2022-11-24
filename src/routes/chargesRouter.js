const express = require('express');
const router = express.Router();
const chargesController = require('../controllers/chargesController');
const autentica = require('../middleware/authMiddleware')

const app = express();

router.get('/', autentica, chargesController.listarCobranca );

router.get('/:id', autentica, chargesController.listarCobrancaPorId );

router.put('/:id', autentica,chargesController.atualizarCobrancaPorId);

router.post('/', autentica, chargesController.criarCobranca);

router.delete('/:id', autentica, chargesController.deletarCobranca);

module.exports = router;