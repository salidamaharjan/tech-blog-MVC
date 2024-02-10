require('dotenv').config();
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.store);
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3000;

const ses = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    reSave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    })
}; 

runMVC();

async function runMVC(){
    await sequelize.sync({force: true});
    console.log('synchronized successfully');
    app.listen(PORT, () => {
        console.log(`Listening at ${PORT}`);
    });
}
