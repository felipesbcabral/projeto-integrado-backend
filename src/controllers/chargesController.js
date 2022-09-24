const createError = require('http-errors');

const contas = [
    {
        "id": 1,
        "Cobranca": "Academia",
        "Data de vencimentos": "10/10/2022",
        "valor": "100.00",
        "situacao": "Pendente",
    },
    {
        "id": 2,
        "Cobranca": "Faculdade",
        "vencimento": "07/09/2022",
        "valor": "467.00",
        "situacao": "Pago",
    },
    {
        "id": 3,
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
    const localizar = contas.find(item => 
        item.id === Number(req.params.id)
        );
        if(!localizar) {
            return res.status(404).json({msg:"Cobrança não localizada"});
        }
    res.json(localizar);
}

module.exports = { listarContas, listarContasPorId };