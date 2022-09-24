const createError = require('http-errors');

const contas = [
    {
        "id": "01",
        "Cobranca": "Academia",
        "Data de vencimentos": "10/10/2022",
        "valor": "100.00",
        "situacao": "Pendente",
    },
    {
        "id": "02",
        "Cobranca": "Faculdade",
        "vencimento": "07/09/2022",
        "valor": "467.00",
        "situacao": "Pago",
    },
    {
        "id": "03",
        "Cobranca": "Netflix",
        "vencimento": "05/09/2022",
        "valor": "60.00",
        "situacao": "Em Atraso",
    },
];

function listarContas (req, res, next) {
    res.json(contas);
}

function listarContasPorId (req, res, next) {
    const id = Number(req.params.id);
    if (id > contas.length) return next(createError(404, "Boleto não localizado!"));
    res.json(contas[id]);
}

module.exports = { listarContas, listarContasPorId };