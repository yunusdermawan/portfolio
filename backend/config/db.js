const mysql = require('mysql2');
 
const pool = mysql.createPool({
  user: 'root',
  host: 'localhost',
  database: 'portfolio_app',
  password: 'contoll',
  port: '3306',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise()

// async function testQuery() {
//   const [rows] = await pool.query("SELECT * from test_table");
//   console.log(rows);
// }

// testQuery();

module.exports = pool;