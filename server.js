require('dotenv').config();
const path = require('path');
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

app.use(session(ses));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

runMVC();

async function runMVC(){
    await sequelize.sync({force: true});
    console.log('synchronized successfully');
    app.listen(PORT, () => {
        console.log(`Listening at http://localhost:${PORT}`);
    });
}
