const inquirer = require('inquirer');
const mysql2 = require('mysql2');
const cTable = require('console.table');
const connection = require('./db/connection.js')

function viewAllDepartments() {
  const query = "SELECT * FROM departments;"
  connection.query(
    query,
    function(err, results, fields) {
      console.table(results); // results contains rows returned by server
      question();
    }
  );
  
}

function viewAllRoles() {
  const query = "SELECT * FROM roles;"
  connection.query(
    query,
    function(err, results, fields) {
      console.table(results); // results contains rows returned by server
      question();
    }
  );
}

function viewAllEmployees() {
  const query = "SELECT * FROM employees;"
  connection.query(
    query,
    function(err, results, fields) {
      console.table(results); // results contains rows returned by server
      question();
    }
  );
}

function addDepartment() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'department',
      message: 'name of department?',
    },
  ])
  .then((answers) => {
    const query = `INSERT INTO departments (name) VALUES (?);`;
    connection.query(
      query,
      answers.department,
      function(err, results, fields) {
        if (err){
          console.log(err);
        };
        console.table(results); // results contains rows returned by server
        question();
      }
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  
}

function question() {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: [
        'view all departments',
        'view all roles',
        'view all employees',
        'add a department',
        'add a role',
        'add an employee',
        'update employee role',
      ],
    },
  ])
  .then((answers) => {
    switch (answers.action)
    {
      case 'view all departments': 
        viewAllDepartments();
        break;
      case 'view all roles':
        viewAllRoles();
        break;
      case 'view all employees':
        viewAllEmployees();
        break;
      case 'add a department':
        addDepartment();
        break;
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

question();