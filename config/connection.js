// Set up MySQL connection.
const mysql = require('mysql');
const { Sequelize } = require('sequelize');
const password = require("../private");

const sequelize = new Sequelize('database', 'username', 'password', {
    host: "localhost",
    dialect: 'mysql'
  })

//  try {
//   await sequelize.authenticate();
//    console.log('Connection has been established successfully.');
//  } catch (error) {
//    console.error('Unable to connect to the database:', error);
//  }

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: password,
  database: "cupcake_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
