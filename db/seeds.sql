INSERT INTO departments (name)
VALUES
("Operations"),
("Maintenance"),
("Utilities"),
("Engineering"),
("Admin"),
("Quality Control");

INSERT INTO roles (title, salary, department_id)
VALUES
("Plant Manager", 200000, 1),
("Operations Manager", 150000, 1),
("Maintence Manager", 120000, 2),
("Sr. Engineer", 120000, 4),
("Engineer", 80000, 4),
("Mechanic", 75000, 2),
("Accountant", 100000, 5),
("Administrative Assistant", 50000, 5),
("Operator", 80000, 1),
("Laborer", 45000, 2),
("Electrician", 85000, 3),
("Boiler Operator", 82000, 3),
("Quality Tech.", 60000, 6);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Sara", "Havel", 1, NULL),
("Quan", "Anderson", 2, 1),
("Jonas", "Avram", 3, 1),
("Rupa", "Domitia", 4, 1),
("Axel", "Russel", 5, 4),
("Indie", "Kubra", 5, 4),
("Brody", "Sue", 6, 3),
("Ru", "Sybil", 6, 3),
("Meriadoc", "Brandybuck", 6, 3),
("Janey", "Sa'adah", 7, 1),
("Kimberlyn", "Scarlett", 8, 7),
("Rick", "Andrea", 9, 2),
("Jaslene", "Shayne", 9, 2),
("Raynard", "Kingston", 9, 2),
("Eugenia", "Kameron", 10, 3),
("Ryder", "Imram", 10, 3),
("Olly", "Dren", 11, 2),
("Delora", "Merrion", 12, 2),
("Sa'di", "Gillian", 13, 2);

`SELECT a.*, b.last_name "Manager"
    FROM employees a JOIN employees b
    ON (a.manager_id = b.id);`

  