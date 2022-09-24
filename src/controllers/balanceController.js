const createError = require('http-errors');

const saldo = [
    {
        "id": 1,
        "Nome": "Dutra",
        "Saldo": "1000.00",
    },
    {
        "id": 2,
        "Nome": "Cabral",
        "Saldo": "1020.00",
    }

  
];

function listarFaltas (req, res, next) {
    res.json(saldo);
}
function listarSaldoPorNome (req, res, next) {
    const localizar = saldo.find(item => 
        item.id === Number(req.params.id)
        );
        if(!localizar) {
            return res.status(404).json({msg:"Saldo nao localizado"});
        }
    res.json(localizar);
}



module.exports = { listarFaltas, listarSaldoPorNome };