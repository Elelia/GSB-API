var dbConn = require('../../dbconfig');

var User = (user) => {
    this.num = num;
        this.login = user.login;
        this.mdp = user.mdp;
        this.nom = user.nom;
        this.prenom = user.prenom;
        this.adresse = user.adresse;
        this.codeVille = user.codeVille;
        this.telephone = user.telephone;
        this.type = user.type;
}

User.getAllUsers = (result) => {
    dbConn.query("SELECT * FROM utilisateurs", (err, res) => {
        if(err) {
            console.log('Error while fetching users', err);
            result(null,err);
        } 
        else {
            //donc il passe bien là mais je veux qu'il retourne les résultats moi
            console.log('Success !');
            result(null,res);

        }
    })
};

//On retrouve l'user par l'id
User.getUserById = (id, result) => {
    dbConn.query(`SELECT * FROM utilisateurs WHERE num=?`, id, (err, res) => {
        if(err) {
            console.log('Error while fetching users by id', err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    })
}

//on retrouve l'user par le login et le mot de passe
User.getUserByLoginMdp = (id, mdp, result) => {
    dbConn.query(`SELECT * FROM utilisateurs WHERE login=? AND mdp=?`, [id, mdp], (err, res) => {
        if(err) {
            console.log('Error while fetching users by login and mdp', err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    })
}

module.exports = User;