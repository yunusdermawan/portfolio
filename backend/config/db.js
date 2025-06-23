const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('portfolio_database', 'root', 'anonine123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Disable logging; remove or set to true if you prefer logs
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
