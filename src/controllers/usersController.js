const createError = require("http-errors");

const users = [{
    username: 'Felipe',
    password: '12345678'
}];

function userAuthenticate (req, res, next) {
    const{ username, password } = req.body;

    for(let i = 0; i < users.length; i++){

        if(users[i].username === username && users[i].password === password){
            return res.status(200).send("Usuário logado com sucesso");
        }
    }
    return res.status(401).send("Usuário ou senha incorretos");
}

module.exports = { userAuthenticate };
