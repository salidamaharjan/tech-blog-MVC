const sequelize = require('./config/connection');

sequelize.sync({force: true});
console.log('synchronized successfully');
