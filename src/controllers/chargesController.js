const { ObjectId } = require('bson');
const Cobranca = require('../models/chargesModel');

async function criarCobranca(req, res) {
  const cobranca = new Cobranca(req.body);
  const erros = []
   await cobranca.save()
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

async function listarCobranca(req, res) {
  await Cobranca.find({})
  .then(cobranca => {return res.json(cobranca);})
  .catch(error => {return res.status(500).json({error}); });
}

async function listarCobrancaPorId(req, res) {
  await Cobranca.findOne({_id: ObjectId(req.params.id)})
  .then(cobranca => {
      if(cobranca) return res.json(cobranca);
      else return res.status(404).json('Cobrança nao localizado')
  })
  .catch(error => {return res.status(500).json({error}); });
}

async function atualizarCobrancaPorId(req, res) {
  await Cobranca.findOneAndUpdate({_id: ObjectId(req.params.id)}, req.body,
  {runValidators: true})
  .then(cobranca => {
      if(cobranca) return res.status(204).end();
      else return res.status(404).json('Cobrança atualizado com sucesso!')
  })
  .catch(error => {return res.status(500).json({error}); });
}

async function deletarCobranca(req, res) {
  await Cobranca.findOneAndDelete({_id: ObjectId(req.params.id)})
  .then(cobranca => {
      if(cobranca) return res.status(204).end();
      else return res.status(404).json('Cobrança deletado com sucesso!')
  })
  .catch(error => {return res.status(500).json({error}); });
}


module.exports = { listarCobranca, listarCobrancaPorId, atualizarCobrancaPorId, criarCobranca, deletarCobranca };

