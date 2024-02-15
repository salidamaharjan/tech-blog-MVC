const { Sequelize } = require("sequelize");
const { CLEARDB_DATABASE_URL } = process.env;

const sequelize = new Sequelize(CLEARDB_DATABASE_URL);

module.exports = sequelize;
