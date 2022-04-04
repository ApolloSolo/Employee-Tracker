if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const db = require("./db/connection");

app.get("/api/roles", async (req, res) => {
  const sql = `SELECT roles.*, departments.name
                    AS department_name
                    FROM roles
                    LEFT JOIN departments
                    ON roles.department_id = departments.id`;
    db.promise().query(sql)
    .then(([rows, fields]) => {
        res.json({
            message: "success",
            data: rows
        })
    })
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}); //
