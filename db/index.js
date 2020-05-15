const mysql = require('mysql');

const mysqlConfig = {
  host: 'db',
  user: 'root',
  password: '',
  database: 'gallery',
};
const connection = mysql.createConnection(mysqlConfig);
module.exports = connection;
