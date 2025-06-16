const mysql = require('mysql2/promise');

const pool = mysql.createPool({
//   uri: process.env.DATABASE_URL,
  uri: 'root:anonine123@localhost:3306/portfolio_database',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pool;
