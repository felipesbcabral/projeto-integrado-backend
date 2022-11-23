const express = require('express');
const router = express.Router();
const balanceController = require('../controllers/balanceController');
const autentica = require('../middleware/authMiddleware')
const app = express();

router.get('/saldo', autentica, balanceController.listarSaldo);

router.get('/saldo/:id', autentica, balanceController.listarSaldoPorNome);

router.put('/saldo/:id', autentica,balanceController.atualizarSaldo);

router.post('/saldo', autentica, balanceController.criarSaldo);


module.exports = router;