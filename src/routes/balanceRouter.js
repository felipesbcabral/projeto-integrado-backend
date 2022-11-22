const express = require('express');
const router = express.Router();
const balanceController = require('../controllers/balanceController');

const app = express();

router.get('/', balanceController.listarSaldo);

router.get('/:id', balanceController.listarSaldoPorNome);

router.put('/saldo/:id',balanceController.atualizarSaldo);

router.post('/saldo', balanceController.criarSaldo);


module.exports = router;