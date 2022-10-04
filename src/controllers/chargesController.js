const createError = require("http-errors");

const cobranca = [
  {
    id: 1,
    cobranca: "Academia",
    vencimento: "07/09/2022",
    valor: "100.00",
    situacao: "Pendente",
  },
  {
    id: 2,
    cobranca: "Faculdade",
    vencimento: "07/09/2022",
    valor: "467.00",
    situacao: "Pago",
  },
  {
    id: 3,
    cobranca: "Metflix",
    vencimento: "05/09/2022",
    valor: "60.00",
    situacao: "Em Atraso",
  },
];

function listarCobranca(req, res, next) {
  res.json(cobranca);
}

function listarCobrancaPorId(req, res, next) {
  const buscar = cobranca.find((item) => item.id === Number(req.params.id));
  if (!buscar) {
    return res.status(404).json({ msg: "Cobrança não localizada" });
  }
  res.json(buscar);
}
function atualizarCobrancaPorId(req, res, next) {
    const buscar = cobranca.find(
      (cobranca) => cobranca.id === Number(req.params.id)
    );
    if (!buscar) {
        return res.status(404).json({ msg: "Cobrança não localizada" });
    }
    buscar.cobranca = req.body.cobranca;
    buscar.vencimento = req.body.vencimento;
    buscar.valor = req.body.valor;
    buscar.situacao = req.body.situacao;
    res.status(200).json({ msg: "Cobrança atualizado com sucesso" });
  }
  function criarCobranca (req, res, next){
    const novaCobranca  = {
    id: cobranca[cobranca.length-1].id + 1,
    cobranca: req.body.cobranca,
    vencimento: req.body.vencimento,
    valor: req.body.valor,
    situacao: req.body.situacao,
    }
    cobranca.push(novaCobranca);
    res.status(201).json(novaCobranca);
}

function deletarCobranca (req, res, next) {
    const buscar = cobranca.findIndex(cobranca => cobranca.id === Number(req.params.id));
    if(buscar < 0){
            return res.status(404).json({msg:"Cobrança inexistente"});
    }
    cobranca.splice(buscar, 1);
    res.status(200).json({msg:"Cobrança excluida com sucesso"});
}

module.exports = { listarCobranca, listarCobrancaPorId, atualizarCobrancaPorId, criarCobranca, deletarCobranca };

