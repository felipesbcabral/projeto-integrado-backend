const createError = require('http-errors');

const boletos = [
    {
        "mensalidade": "01",
        "vencimento": "01/01/2022",
        "valor": "500.00",
        "situacao": "Pago",
    },
    {
        "mensalidade": "02",
        "vencimento": "01/02/2022",
        "valor": "500.00",
        "situacao": "Pago",
    },
    {
        "mensalidade": "03",
        "vencimento": "01/03/2022",
        "valor": "500.00",
        "situacao": "Em Atraso",
    },
];

function listarBoletos (req, res, next) {
    res.json(boletos);
}

function listarBoletosPorId (req, res, next) {
    const id = Number(req.params.id);
    if (id > boletos.length) return next(createError(404, "Boleto não localizado!"));
    res.json(boletos[id]);
}

module.exports = { listarBoletos, listarBoletosPorId };