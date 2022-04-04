const mysql = require("mysql2");

    require('dotenv').config(); 


const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "BAIley!@#$1234",
        database: "work",
    },
    //console.log("Connected to database")
);

module.exports = db;