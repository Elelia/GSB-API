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

//create new flat
exports.createNewFlat = (req, res) => {
    console.log('req data', req.body);
    const flatReqData = new FlatsModel(req.body);
    console.log('req data', flatReqData);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({success: false, message: 'Something missing'});
    } else {
        console.log('success data');
        FlatsModel.insertFlat(req.body, (err, request) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'Success insert into request', data: request});
            console.log("Super le insert into flat !");
        })
    }
}