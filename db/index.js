const mysql = require('mysql');
const mysqlConfig = require('./seeder/mysql.config.js'); 
const connection = mysql.createConnection(mysqlConfig);
module.exports = connection;
