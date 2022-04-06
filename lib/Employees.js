const db = require("../db/connection");

function Employees() {
  Employees.prototype.viewEmployees = function () {
    const sql = `SELECT employees.*, roles.title
    AS title
    FROM employees
    LEFT JOIN roles
    ON employees.role_id = roles.id`;
    db.promise()
      .query(sql)
      .then(([rows, fields]) => {
        let tableRows = [];

        for (let row of rows) {
          let item = {
            first_name: row.first_name,
            last_name: row.last_name,
            title: row.title,
          };
          tableRows.push(item);
        }
        console.table(tableRows);
      });
  };

  Employees.prototype.addEmployee = function (
    first_name,
    last_name,
    role_id,
    manager_id
  ) {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
                    VALUES(?, ?, ?, ?)`;
    const params = [first_name, last_name, role_id, manager_id];
    db.promise()
      .query(sql, params)
      .then(([rows, fields]) => {
        console.log("Employee added!");
      });
  };

  Employees.prototype.updateEmployeeRole = function (newRole, id) {
    const sql = `UPDATE employees SET role_id = ? 
    WHERE id = ?`;
    const params = [newRole, id];
    db.promise()
      .query(sql, params)
      .then(([rows, fields]) => {
        console.log("Employee Updated!");
      });
  };
}

module.exports = { Employees };
