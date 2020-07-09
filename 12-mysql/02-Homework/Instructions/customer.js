// SETUP
// =====================================================================================
const mysql = require('mysql');
const inquirer = require('inquirer');
const chalk = require('chalk');
const Table = require('cli-table');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '18541911z',
    database: 'bamazon'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connection successful');
    // display all items from database once mysql connection has been established
    displayItems();
});

// GLOBAL VARIABLES
// =====================================================================================
let chosenItem = {};

// FUNCTIONS
// =====================================================================================
// function to reset the chosenItem array so that previous purchases are not inside
let resetCart = function() {
    chosenItem = {};
}

// function to display all items for sale
let displayItems = function() {
    connection.query(`SELECT * FROM products`, (err, res) => {
        let listTable = new Table({
            head: ['Item ID', 'Product Name', 'Price'],
            colWidths: [10, 45, 12]
        });

        for (let i = 0; i < res.length; i++) {
            listTable.push([res[i].item_id, res[i].product_name, `$${res[i].price}`]);
            // console.log(chalk.blue.bold(`\n\tItem ID: ${res[i].item_id}\n\tProduct Name: ${res[i].product_name}\n\tPrice: $${res[i].price}\n`));
        }
        
        console.log(`\n\n${listTable.toString()}\n\n`);
        // ask user to enter ID of item they wish to purchase
        askForID();
    });
};

