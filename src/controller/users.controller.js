const UsersModel = require('../models/users');

//test idk à quoi ça sert
exports.getUsersList = (req, res) => {
    UsersModel.getAllUsers((err, users) => {
        console.log("Super c'est tous les utilisateurs !");
        if(err)
        res.send(err);
        res.send(users);
        //ok c'est good je retrouve bien mes utilisateurs avec ça
    })
}

//get user by id 
exports.getUserById = (req,res) => {
    console.log("user by id");
    //good je passe bien dessus
    UsersModel.getUserById(req.params.id, (err, user) => {
        if(err)
        res.send(err);
        console.log("easy les utilisateurs by id");
        res.send(user)
    })
}

//get user by id 
exports.getUserByLoginMdp = (req,res) => {
    console.log("user by login mdp");
    //good je passe bien dessus
    UsersModel.getUserByLoginMdp(req.params.login, req.params.mdp, (err, user) => {
        if(err)
        res.send(err);
        console.log("easy les utilisateurs login mdp");
        res.send(user)
    })
}
