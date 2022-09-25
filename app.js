var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var indexRouter = require('./src/routes/indexRoutes');
var routerCharges = require('./src/routes/chargesRouter');
var routerBalance = require('./src/routes/balanceRouter');
var routerUsers = require('./src/routes/usersRouter');

var app = express();

app.use(express.json());

app.use('/wallets-manager', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', indexRouter);
app.use('/cobranca', routerCharges);
app.use('/saldo', routerBalance);
app.use('/login', routerUsers);
app.use('/criar', routerCharges);
app.use('/atualizar', routerCharges);
app.use('/deletar', routerCharges);
app.use('/atualizar', routerBalance);


module.exports = app;