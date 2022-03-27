const FlatsModel = require('../models/flats');

//get all flats
exports.getFlatsList = (req, res) => {
    FlatsModel.getAllFlats((err, flats) => {
        console.log("Super c'est tous les appartements !");
        if(err)
        res.send(err);
        res.send(flats);
    })
}

//get flats by id prop
exports.getFlatsListByProp = (req, res) => {
    FlatsModel.getFlatsByProp(req.params.id, (err, flats) => {
        console.log("Super c'est les appartement du propriétaire !");
        if(err)
        res.send(err);
        res.send(flats);
    })
}

//get flats by id prop
exports.getFlatsById = (req, res) => {
    FlatsModel.getAllFlatsById(req.params.num, (err, flats) => {
        console.log("Super c'est les appartement par numéro !");
        if(err)
        res.send(err);
        res.send(flats);
    })
}