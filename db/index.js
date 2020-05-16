const mysql = require('mysql');

const mysqlConfig = {
  host: '54.241.188.109',
  user: 'root',
  password: '',
  database: 'gallery',
};
const connection = mysql.createConnection(mysqlConfig);
module.exports = connection;
