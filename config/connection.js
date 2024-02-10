const { Sequelize } = require('sequelize');
const {DB_NAME, DB_PASSWORD, DB_USER} = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: "127.0.0.1",
    dialect: 'mysql'
});

module.exports = sequelize;