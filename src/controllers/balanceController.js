const { ObjectId } = require('bson');
const Saldo = require('../models/balanceModel');

async function listarSaldo(req, res) {
  await Saldo.find({})
  .then(saldo => {return res.json(saldo);})
  .catch(error => {return res.status(500).json({error}); });
}

async function listarSaldoPorNome(req, res) {
  await Saldo.findOne({_id: ObjectId(req.params.id)})
  .then(saldo => {
      if(saldo) return res.json(saldo);
      else return res.status(404).json('Saldo nao localizado')
  })
  .catch(error => {return res.status(500).json({error}); });
}

async function atualizarSaldo(req, res) {
  await Saldo.findOneAndUpdate({_id: ObjectId(req.params.id)}, req.body,
  {runValidators: true})
  .then(saldo => {
      if(saldo) return res.status(204).end();
      else return res.status(404).json('Saldo atualizado com sucesso!')
  })
  .catch(error => {return res.status(500).json({error}); });
}

async function criarSaldo(req, res) {
  const saldo = new Saldo(req.body);
  const erros = []
   await saldo.save()
   .then(doc => {
      console.log(doc)
      return res.status(201).end();
  })
   .catch(error => {
     const msgErro = {};
      Object.values(error.errors).forEach(({properties}) =>{
          msgErro[properties.path] = properties.message;
      });
      return res.status(422).json(msgErro);
  });
}

module.exports = { listarSaldo, listarSaldoPorNome, atualizarSaldo, criarSaldo };
