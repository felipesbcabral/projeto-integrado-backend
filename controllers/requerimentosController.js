const createError = require('http-errors');

const requerimentos = [
    {
        "id": 1,
        "disciplina": { "codigo": "ADS030", "nome": "Manutenção de Software e DevOps" },
        "periodo": "2021/1",
        "prova": "A1",
        "situacao": "Deferido",
        "argumentacao": "A questão 1 foi respondida conforme o material da disciplina.",
        "parecer": "A pontuação da questão foi revisada e a nota da prova atualizada."
    },
    {
        "id": 2,
        "disciplina": { "codigo": "ADS032", "nome": "Construção de Frontend" },
        "periodo": "2021/1",
        "prova": "A2",
        "situacao": "Indeferido",
        "argumentacao": "Favor reconsiderar a questão 2.",
        "parecer": "A resposta dada à questão é referente a outro assunto."
    },
];

function listarRequerimentos (req, res, next) {
    res.json(requerimentos);
}

function listarRequerimentosPorId (req, res, next) {
    const id = Number(req.params.id);
    if (id > requerimentos.length) return next(createError(404, "Requerimento não localizado!"));
    res.json(requerimentos[id]);
}

function criarRequerimentos (req, res, next) {
    const novoRequerimento = {
        id: requerimentos[requerimentos.length-1].id + 1,
        "disciplina": { "codigo": req.body.disciplina.codigo, "nome": req.body.disciplina.nome },
        "periodo": req.body.perido,
        "prova": req.body.prova,
        "argumentacao": req.body.argumentacao,
        "situacao": "Pendente"
    }
    requerimentos.push(novoRequerimento);
    res.status(201).json(novoRequerimento);
}

module.exports = { listarRequerimentos, listarRequerimentosPorId, criarRequerimentos };