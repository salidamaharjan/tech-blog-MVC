const express = require('express');
const handlebars = require('express-handlebars');
const hbs = handlebars.create({});
const router = require('./controller');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

//set the app to use the handlebars engine
app.set('view engine', 'handlebars');
// sets handlebars configurations
app.engine('handlebars', hbs.engine);

app.use(router);

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});