USE employeeDB;

INSERT INTO departments (name)
    VALUES 
    ('human resouces'),
    ('accounting'),
    ('sales'),
    ('marketing');

INSERT INTO roles (department_id, title, salary)
    VALUES
    (1, 'Recruiter', 80000),
    (2, 'Accountant', 90000),
    (3, 'Sales Representative', 60000),
    (3, 'Director of Sales' 100000),
    (4, 'Marketer' 60000);

INSERT INTO roles (manager_id, first_name, last_name, role_id)
    VALUES
    

    

