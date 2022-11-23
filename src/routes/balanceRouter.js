const express = require('express');
const router = express.Router();
const balanceController = require('../controllers/balanceController');

const app = express();

router.get('/saldo', balanceController.listarSaldo);

router.get('/saldo/:id', balanceController.listarSaldoPorNome);

router.put('/saldo/:id',balanceController.atualizarSaldo);

router.post('/saldo', balanceController.criarSaldo);


module.exports = router;