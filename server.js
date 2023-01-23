const mysql = require("mysql");
const inquirer = require("inquirer");

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: '',
      database: 'movies_db'
    },
console.log(`Connected to the mainframe.`)
);

const firstPrompt = [ 
    {
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: ['view Employees', 'View Employees by Department', 'Add an Employee', 'Remove an Employee', 'Update an Employee Role', 'Add a New Role', 'End'],
        
    }]
