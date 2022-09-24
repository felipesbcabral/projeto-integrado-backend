var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var indexRouter = require('./src/routes/index');
var routerBoletos = require('./src/routes/chargesRouter');
var routerFaltas = require('./src/routes/balanceRouter');
var routerNotas = require('./src/routes/notasRouter');
var requerimentosRouter = require('./src/routes/requerimentosRouter');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', indexRouter);
app.use('/boletos', routerBoletos);
app.use('/faltas', routerFaltas);
app.use('/notas', routerNotas);
app.use('/requerimentos', requerimentosRouter);




module.exports = app;