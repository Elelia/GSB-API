const UsersModel = require('../models/users');

//get all users
exports.getUsersList = (req, res) => {
    UsersModel.getAllUsers((err, users) => {
        console.log("Super c'est tous les utilisateurs !");
        if(err)
        res.send(err);
        res.send(users);
    })
}

//get user by id 
exports.getUserById = (req,res) => {
    console.log("user by id");
    UsersModel.getUserById(req.params.id, (err, user) => {
        if(err)
        res.send(err);
        console.log("easy les utilisateurs by id");
        res.send(user)
    })
}

//get user by login mot de passe
exports.getUserByLoginMdp = (req,res) => {
    console.log("user by login mdp");
    UsersModel.getUserByLoginMdp(req.params.login, req.params.mdp, (err, user) => {
        if(err)
        res.send(err);
        console.log("easy les utilisateurs login mdp");
        res.send(user)
    })
}

//update user
exports.updateUserInfo = (req, res) => {
    console.log('req data', req.body);
    //a voir si c'est utile ce if là on s'en fout
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({success: false, message: 'Something missing'});
    } else {
        console.log('success data');
        UsersModel.updateUser(req.params.num, req.body, (err, user) => {
            if(err) {
                res.send(err);
            } else {
                res.json([{status: true, message: 'Success update user', data: user}]);
                console.log("Super le update user !");
            }
        })
    }
}
