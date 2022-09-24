const express = require('express');
const router = express.Router();
const chargesController = require('../controllers/chargesController');

const app = express();

router.get('/', chargesController.listarContas );

router.get('/:id', chargesController.listarContasPorId );

module.exports = router;