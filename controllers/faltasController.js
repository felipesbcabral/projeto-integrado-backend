const createError = require('http-errors');

const faltas = [
    {
        "periodo": "2021/1",
        "disciplina": { "codigo": "ADS030", "nome": "Manutenção de Software e DevOps" },
        "total": "0",
        "porcentagem": "0",
    },
    {
        "periodo": "2021/1",
        "disciplina": { "codigo": "ADS032", "nome": "Construção de Frontend" },
        "total": "18",
        "porcentagem": "15",
    },

];

function listarFaltas (req, res, next) {
    res.json(faltas);
}

module.exports = { listarFaltas };