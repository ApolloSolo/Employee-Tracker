if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./db/connection");
const apiRoutes = require('./routes/apiRoutes/index');
const inquirer = require("inquirer");

const {Start} = require('./lib/Start');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//app.use('/api', apiRoutes);

new Start().begin();



db.connect((err) => {
  if (err) throw err;
  //console.log("Database connected.");
  app.listen(PORT, () => {
    //console.log(`Server running on port ${PORT}`);
  });
});