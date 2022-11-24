const express = require('express');
const router = express.Router();
const balanceController = require('../controllers/balanceController');
const autentica = require('../middleware/authMiddleware')
const app = express();

router.get('/', autentica, balanceController.listarSaldo);

router.get('/:id', autentica, balanceController.listarSaldoPorNome);

router.put('/:id', autentica,balanceController.atualizarSaldo);

router.post('/', autentica, balanceController.criarSaldo);


module.exports = router;