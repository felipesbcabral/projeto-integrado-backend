var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var indexRouter = require('./src/routes/index');
var routerCharges = require('./src/routes/chargesRouter');
var routerBalance = require('./src/routes/balanceRouter');

var app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', indexRouter);
app.use('/cobranca', routerCharges);
app.use('/saldo', routerBalance);


module.exports = app;