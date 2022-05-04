const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "gsb",
    password: "verT22+sLam10",
    database : "gsb_location"
});

dbConn.connect(function(error) {
    if(error) throw error;
    console.log('Database connected successfully.');
})

module.exports = dbConn;