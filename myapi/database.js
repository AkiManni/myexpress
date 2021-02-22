const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Kaniini12',
  database: 'tvt20spl'
});
module.exports = connection;