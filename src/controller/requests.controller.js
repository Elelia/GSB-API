const RequestsModel = require('../models/requests');

//get all requests
exports.getRequestsList = (req, res) => {
    RequestsModel.getAllRequests((err, requests) => {
        console.log("Super c'est toutes les demandes !");
        if(err)
        res.send(err);
        res.send(requests);
    })
}

//get last request
exports.getRequestLast = (req, res) => {
    RequestsModel.getLastRequest((err, requests) => {
        console.log("Super c'est la dernière demande !");
        if(err)
        res.send(err);
        res.send(requests);
    })
}

//create new request
exports.createNewRequest = (req, res) => {
    console.log('req data', req.body);
    console.log('req data', req.body.typeDem);
    const requestReqData = new RequestsModel(req.body);
    console.log('req data', requestReqData);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({success: false, message: 'Something missing'});
    } else {
        console.log('success data');
        RequestsModel.insertRequest(req.body, (err, request) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'Success insert into request', data: request});
            console.log("Super le insert into demandes !");
        })
    }
}

//create new concern
exports.createNewConcern = (req, res) => {
    console.log('req data', req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({success: false, message: 'Something missing'});
    } else {
        console.log('success data');
        RequestsModel.insertConcern(req.body, (err, request) => {
            if(err)
            res.send(err);
            res.json({status: true, message: 'Success insert into concern', data: request});
            console.log("Super le insert into concerner !");
        })
    }
}

//get requests by type
exports.getRequestsListByType = (req, res) => {
    RequestsModel.getRequestsByType(req.params.type, (err, requests) => {
        console.log("Super les demandes par type !");
        if(err)
        res.send(err);
        res.send(requests);
    })
}

//get requests by numero client
exports.getRequestsListByNumeroBuyer = (req, res) => {
    RequestsModel.getRequestByNumBuyer(req.params.num, (err, requests) => {
        console.log("Super les demandes par numéro client !");
        if(err)
        res.send(err);
        res.send(requests);
    })
}