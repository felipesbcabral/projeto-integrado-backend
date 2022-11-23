const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/env.json')
async function registrar(req, res) {

    const user = new User(req.body);
    user.password = await bcrypt.hashSync(user.password, 8)
    await user.save()
    .then(doc => {
        doc.password = undefined;
        return res.status(201).json(doc);
    })
    .catch(error => {
        const msg = {};
        if(error.errors){
        Object.values(error.errors).forEach(({properties}) =>{
            msg[properties.path] = properties.message;
        });
    }
    if(error.code == 11000) {
        msg["erro"] = "Email ja registrado"
    }
        return res.status(422).json(msg);
    }); 
}
async function login(req, res) {
    const {email, password} = req.body;
    await User.findOne({email}).select('+password')
    .then( doc =>{
        if(!doc) {
            return res.status(404).json({erro : 'Usuario nao cadastrado'});
        }
        const autentica =  bcrypt.compareSync(password, doc.password);
        if (!autentica) {
            return res.status(400).json({erro : 'senha nao invalida'});
        }
        const token = jwt.sign({id: doc._id}, config.segredo, {expiresIn: '1d' });
        return res.json({email, token});
    })
    .catch(error => {
        console.log(error)
        return res.status(500).json(error);
    }) 
}
module.exports = {registrar, login};