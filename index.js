const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./db/connection");
const apiRoutes = require('./routes/apiRoutes/index');
const {Start} = require('./lib/Start');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

// Initiate the content management system
new Start().begin();

db.connect((err) => {
  if (err) throw err;
  app.listen(PORT, () => {});
});