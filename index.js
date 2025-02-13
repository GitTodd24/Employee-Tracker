const inquire=require("inquirer")
const { printTable } = require('console-table-printer');
const { Pool } = require('pg');

// Connect to database
const pool = new Pool(
    {
    // TODO: Enter PostgreSQL username
    user: '',
    // TODO: Enter PostgreSQL password
    password: '',
    host: 'localhost',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
)

pool.connect();

let deletedRow = 2;

function mainMenu(){
    inquirer.prompt([
        {
            type:"list",
            message: "What would you like to do?",
            name: "menu",
            choices:["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
        }
    ])
    .then(response => {
        if(response.menu==="view all departments"){
            viewDepartments()
        }
    })
}




function viewDepartments(){
    
}