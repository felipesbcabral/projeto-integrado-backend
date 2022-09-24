const express = require('express');
const router = express.Router();
const indexControllers = require('../controllers/indexController');

const app = express();
router.get('/', indexControllers.indexRouter)

module.exports = router;
