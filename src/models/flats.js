var dbConn = require('../../dbconfig');

var Flat = (flat) => {
    this.numAppart = flat.numAppart;
    this.typeAppart = flat.typeAppart;
    this.prixLoc = flat.prixLoc;
    this.prixCharg = flat.prixCharg;
    this.rue = flat.rue;
    this.arrondissement = flat.arrondissement;
    this.etage = flat.etage;
    this.ascenseur = flat.ascenseur;
    this.nbPieces = flat.nbPieces;
    this.taille = flat.taille;
    this.preavis = flat.preavis;
}

//get all flats
Flat.getAllFlats = (result) => {
    dbConn.query("SELECT * FROM appartements", (err, res) => {
        if(err) {
            console.log('Error while fetching flats', err);
            result(null,err);
        } 
        else {
            console.log('Success !');
            result(null,res);
        }
    })
};

module.exports = Flat;