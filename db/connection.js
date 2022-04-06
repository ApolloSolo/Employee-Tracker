const mysql = require("mysql2");
const { user, pass } = require('../secret');

const db = mysql.createConnection(
    {
        host: "localhost",
        user: user,
        password: pass,
        database: "work",
    },
    //console.log("Connected to database")
);

module.exports = db;