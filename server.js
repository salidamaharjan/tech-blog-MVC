const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;


runMVC();

async function runMVC(){
    await sequelize.sync({force: true});
    console.log('synchronized successfully');
    app.listen(PORT, () => {
        console.log(`Listening at ${PORT}`);
    });
}
