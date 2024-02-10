require('dotenv').config();
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const routes = require('./controllers');

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

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(ses));
app.use(express.json());

runMVC();

async function runMVC(){
    await sequelize.sync({force: true});
    console.log('synchronized successfully');
    app.listen(PORT, () => {
        console.log(`Listening at http://localhost:${PORT}`);
    });
}
