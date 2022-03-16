const FlatsModel = require('../models/flats');

exports.getFlatsList = (req, res) => {
    FlatsModel.getAllFlats((err, flats) => {
        console.log("Super c'est tous les appartements !");
        if(err)
        res.send(err);
        res.send(flats);
    })
}