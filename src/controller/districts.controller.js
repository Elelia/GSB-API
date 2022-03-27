const DistrictsModel = require('../models/districts');

//get all districts
exports.getDistrictsList = (req, res) => {
    DistrictsModel.getAllDistricts((err, districts) => {
        console.log("Super c'est tous les arrondissements !");
        if(err)
        res.send(err);
        res.send(districts);
    })
}