var dbConn = require('../../dbconfig');

var District = (district) => {
    this.arrondisseDem = district.arrondisseDem;
}

//get all districts
District.getAllDistricts = (result) => {
    dbConn.query("SELECT * FROM arrondissement", (err, res) => {
        if(err) {
            console.log('Error while fetching districts', err);
            result(null,err);
        } 
        else {
            console.log('Success !');
            result(null,res);
        }
    })
};

module.exports = District;