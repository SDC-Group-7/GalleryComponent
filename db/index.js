const mysql = require('mysql');

const mysqlConfig = {
  host: '13.52.99.237',
  user: 'root',
  password: '',
  database: 'gallery',
};
const connection = mysql.createConnection(mysqlConfig);
module.exports = connection;
