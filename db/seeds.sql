USE employee_db;

INSERT INTO departments (department_name)
    VALUES 
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (departments_id, title, salary)
    VALUES
    (1, 'Sales Lead', 100000),
    (1, 'Salesperson', 80000),
    (2, 'Lead Engineer', 150000),
    (2, 'Software Engineer', 120000),
    (3, 'Account Manager', 160000),
    (3, 'Accountant', 125000),
    (4, 'Legal Team Lead', 250000),
    (4, 'Lawyer', 190000);

INSERT INTO employees (manager_id, roles_id, first_name, last_name)
    VALUES
    (null, 1, 'John', 'Doe'),
    (1, 2, 'Mike', 'Chan'),
    (null, 3, 'Ashley', 'Rodriguez'),
    (3, 4, 'Kevin', 'Tupik'),
    (null, 5, 'Kunal', 'Singh'),
    (5, 6, 'Malia', 'Brown'),
    (null, 7, 'Sarah', 'Lourd'),
    (7, 8, 'Tom', 'Allen');

    

