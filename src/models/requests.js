var dbConn = require('../../dbconfig');

var Request = function(request) {
    //this.numDem = request.numDem;
    this.typeDem = request.typeDem;
    this.dateLimite = request.dateLimite;
    this.num = request.num;
}

var Concern = function(concern) {
    //this.numDem = request.numDem;
    this.numDem = concern.numDem;
    this.arrondisseDem = concern.arrondisseDem;
}

//get all requests
Request.getAllRequests = (result) => {
    dbConn.query("SELECT * FROM demandes", (err, res) => {
        if(err) {
            console.log('Error while fetching requests', err);
            result(null,err);
        } 
        else {
            console.log('Success !');
            result(null,res);
        }
    })
};

//get request by num client
Request.getRequestByNumBuyer = (num, result) => {
    dbConn.query("SELECT * FROM demandes WHERE num=?", num, (err, res) => {
        if(err) {
            console.log('Error while fetching request by num buyer', err);
            result(null,err);
        } 
        else {
            console.log('Success !');
            result(null,res);
        }
    })
};

//get last request
Request.getLastRequest = (result) => {
    dbConn.query("SELECT * FROM demandes order by numDem desc limit 1", (err, res) => {
        if(err) {
            console.log('Error while fetching last request', err);
            result(null,err);
        } 
        else {
            console.log('Success !');
            result(null,res);
        }
    })
};

//insert into demandes
Request.insertRequest = (requestData, result) => {
    dbConn.query("INSERT INTO demandes SET ?", requestData, (err, res) => {
        if(err) {
            console.log('Error while insert request', err);
            result(null, err);
        } 
        else {
            console.log('Insert request is a success !');
            result(null, res);
        }
    })
};

//insert into concerner
Request.insertConcern = (concernData, result) => {
    dbConn.query("INSERT INTO concerner SET ?", concernData, (err, res) => {
        if(err) {
            console.log('Error while insert concern', err);
            result(null, err);
        } 
        else {
            console.log('Insert concern is a success !');
            result(null, res);
        }
    })
};

//get request by type flat
//en gros je retrouve les demandes qui concerne le propriétaire
Request.getRequestsByType = (type, result) => {
    dbConn.query(`SELECT * FROM demandes WHERE typeDem=?`, type, (err, res) => {
        if(err) {
            console.log('Error while fetching request by type', err);
            result(null, err);
        } 
        else {
            console.log('Request by type is a success');
            result(null, res);
        }
    })
};

module.exports = Request;