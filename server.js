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

function firstPrompt() { 
    inquirer.prompt ({
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: ['View Employees', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employees Role', 'Stop']
        
    })
};

function viewEmployees() {

};

function viewRoles() {

};

function viewAllEmployees() {

};

function addDepartment() {

};

function addRole() {

};

function addEmployee() {

};

function updateRole() {

};

function stopApp() {
    connection.end();
};
