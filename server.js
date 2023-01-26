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
        


    
    
    
    
    
    })
};




// function stopApp() {
//     connection.end();
// };
