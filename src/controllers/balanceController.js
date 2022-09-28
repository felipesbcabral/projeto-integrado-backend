const createError = require("http-errors");

const saldo = [
  {
    id: 1,
    nome: "Dutra",
    saldo: "1000.00",
  },
  {
    id: 2,
    nome: "Cabral",
    saldo: "1020.00",
  },
];

function listarSaldo(req, res, next) {
  res.json(saldo);
}
function listarSaldoPorNome(req, res, next) {
  const buscar = saldo.find((item) => item.id === Number(req.params.id));
  if (!buscar) {
    return res.status(404).json({ msg: "Saldo nao localizado" });
  }
  res.json(buscar);
}
function atualizarSaldo(req, res, next) {
  const buscar = saldo.find(
    (saldo) => saldo.id === Number(req.params.id)
  );
  if (!buscar) {
    return res.status(404).json({ msg: "Saldo não localizado" });
  }
  buscar.saldo = req.body.saldo;
  res.status(200).json({ msg: "Saldo atualizado com sucesso" });
}

module.exports = { listarSaldo, listarSaldoPorNome, atualizarSaldo };
