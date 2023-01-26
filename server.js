// Required models
const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

// Connection
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Edxsql12',
        database: 'employee_db'
    },
    console.log(`Connected to the mainframe.`)
);

// Port
const PORT = process.env.PORT || 3001;

firstPrompt();

function firstPrompt() {
    inquirer.prompt({
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: ['View Employees', 'View All Departments', 'View All Roles', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employees Role', 'Stop']

        // WHen View Employees is selected, the employees table will display
    }).then(answers => {
        if (answers.task == 'View Employees') {
            db.query('SELECT * FROM employees', function (err, res) {
                console.table(res)
                if (err) throw err
            })
        }

        else if (answers.task == 'View All Departments') {
            db.query('SELECT * FROM departments', function (err, res) {
                console.table(res)
                if (err) throw err
            })
        }

        else if (answers.task == 'View All Roles') {
            db.query('SELECT * FROM roles', function (err, res) {
                console.table(res)
                if (err) throw err
            })
        }
        else if (answers.task == 'Add a Department') {
            inquirer.prompt({
                type: 'input',
                message: `What department would you like to add?`,
                name: 'deptName'
            })
                .then(answers => {
                    db.query(`INSERT INTO departments (department_name) VALUES ('${answers.deptName}')`, function (err, res) {
                        console.table(res)
                        if (err) throw err
                    })
                    
                })
        }

        // Prompt for add role. Will run through questions and add them to the db
        else if (answers.task == 'Add a Role') {
            inquirer.prompt({
                        name: "title",
                        message: "Enter the role title:",
                        type: "input"
                    },
                    {
                        name: "salary",
                        message: "Expected salary?",
                        type: "input"
                    },
                    {
                        name: "department_id",
                        message: "What is the department ID?",
                        type: "input"
                    }
        )
                .then(answers => {
                    db.query(`INSERT INTO roles (title, salary, departments_id) VALUES 
                    (?, ?, ?)`, [ answers.title, answers.salary, answers.department_id ],
                     function (err, res) {
                        console.table(res)
                        if (err) throw err
                    })
                    
                })
        }
                
        else if (answers.task == 'Add an Employee') {
            inquirer.prompt({
                        name: "first_name",
                        message: "What is the employees first name?",
                        type: "input"
                    },
                    {
                        name: "last_name",
                        message: "What is the employees last name?",
                        type: "input"
                    },
                    {
                        name: "roles_id",
                        message: "What is their role?",
                        type: "input"
                    },
                    {
                        name: "manager_id",
                        message: "Who will be their manager?",
                        type: "input"
                    }
        )
                .then(answers => {
                    db.query(`INSERT INTO roles (first_name, last_name, roles_id, manager_id) VALUES 
                    (?, ?, ?)`, [ answers.first_name, answers.last_name, answers.roles_id, answers.manager_id ],
                     function (err, res) {
                        console.table(res)
                        if (err) throw err
                    })
                    
                })
        }


    
    
    
    
    
    })
};



// Stop app
function stopApp() {
    connection.end();
};

