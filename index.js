if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./db/connection");
const apiRoutes = require('./routes/apiRoutes/index');
const inquirer = require("inquirer");

const {Roles} = require('./routes/apiRoutes/rolesRoutes')

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//app.use('/api', apiRoutes);

//Move this controler to an index route and call it here. 
inquirer
      .prompt({
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: ["Yes", "No"],
      })
      .then(({ action }) => {
        if(action === "Yes") {
          new Roles().askTask();
        }
      })


db.connect((err) => {
  if (err) throw err;
  //console.log("Database connected.");
  app.listen(PORT, () => {
    //console.log(`Server running on port ${PORT}`);
  });
});