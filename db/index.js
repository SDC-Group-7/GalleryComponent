const mysql = require('mysql');

const mysqlConfig = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

const connection = mysql.createConnection(mysqlConfig);

module.exports = connection;
