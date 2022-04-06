const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");

function Roles() {
  Roles.prototype.askTask = function () {
    inquirer
      .prompt({
        type: "list",
        message: "What would you like to do?",
        name: "action",
        choices: ["View Roles", "Quit"],
      })
      .then(({ action }) => {
        if (action === "View Roles") {
          const sql = `SELECT roles.*, departments.name
                          AS department_name
                          FROM roles
                          LEFT JOIN departments
                          ON roles.department_id = departments.id`;
          db.promise()
            .query(sql)
            .then(([rows, fields]) => {
              //title, salary, department_id
              let tableRows = [];

              for (let row of rows) {
                let item = {
                  title: row.title,
                  salary: row.salary,
                  department: row.department_id,
                }
                tableRows.push(item);
              }
              console.table(tableRows);
            });
        }
      });
  };
}

router.get("/roles", async (req, res) => {
  const sql = `SELECT roles.*, departments.name
                      AS department_name
                      FROM roles
                      LEFT JOIN departments
                      ON roles.department_id = departments.id`;
  db.promise()
    .query(sql)
    .then(([rows, fields]) => {
      res.json({
        message: "success",
        data: rows,
      });
    });
});

module.exports = {
  Roles,
};
