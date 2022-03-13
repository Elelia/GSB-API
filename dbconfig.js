const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : "gsb_location"
});

dbConn.connect(function(error) {
    if(error) throw error;
    console.log('Database connected successfully.');
})

module.exports = dbConn;