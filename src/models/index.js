const { Sequelize } = require('sequelize');
const config = require('../config/index');

const sequelize = new Sequelize(config.db_name, config.db_user, config.db_pass, {
  host: config.db_host,
  dialect: config.db_dialect,
  port: config.db_port
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;