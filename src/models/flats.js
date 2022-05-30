var dbConn = require('../../dbconfig');

var Flat = function(flat) {
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

//get flats by id propriétaire
Flat.getFlatsByProp = (id, result) => {
    dbConn.query("SELECT * FROM appartements,posseder WHERE appartements.numAppart = posseder.numAppart AND posseder.num=?", id, (err, res) => {
        if(err) {
            console.log('Error while fetching flats by id prop', err);
            result(null, err);
        } 
        else {
            console.log('Flats by id propriétaire is a success');
            result(null, res);
        }
    })
};

//get flats by id flat
Flat.getAllFlatsById = (num, result) => {
    dbConn.query("SELECT * FROM appartements WHERE numAppart=?", num, (err, res) => {
        if(err) {
            console.log('Error while fetching flats by id flat', err);
            result(null, err);
        } 
        else {
            console.log('Flats by id appartement is a success');
            result(null, res);
        }
    })
};

//insert into flat
Flat.insertFlat = (flatData, result) => {
    dbConn.query("INSERT INTO appartements SET ?", flatData, (err, res) => {
        if(err) {
            console.log('Error while insert flat', err);
            result(null, err);
        } 
        else {
            console.log('Insert flat is a success !');
            result(null, res);
        }
    })
};

module.exports = Flat;