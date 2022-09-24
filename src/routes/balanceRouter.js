const express = require('express');
const router = express.Router();
const balanceController = require('../controllers/balanceController');

const app = express();

router.get('/', balanceController.listarFaltas );
router.get('/:id', balanceController.listarSaldoPorNome );


module.exports = router;