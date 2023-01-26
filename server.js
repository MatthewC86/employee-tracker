const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Edxsql12',
        database: 'employee_db'
    },
    console.log(`Connected to the mainframe.`)
);

const PORT = process.env.PORT || 3001;

firstPrompt();

function firstPrompt() {
    inquirer.prompt({
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: ['View Employees', 'View All Departments', 'View All Roles', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employees Role', 'Stop']

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


        else if (answers.task == 'Add a Role') {
            inquirer.prompt({
                        name: "title",
                        message: "Enter role title:",
                        type: "input"
                    },
                    {
                        name: "salary",
                        message: "Enter salary:",
                        type: "input"
                    },
                    {
                        name: "department_id",
                        message: "Enter department ID:",
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
                


    
    
    
    
    
    })
};




// function stopApp() {
//     connection.end();
// };
