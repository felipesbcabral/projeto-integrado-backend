const createError = require("http-errors");

function indexRouter(req, res, next) {
    res.json("API DE CONTROLE FINANCEIRO");
  }

  module.exports = {indexRouter}