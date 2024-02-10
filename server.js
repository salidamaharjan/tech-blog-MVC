require("dotenv").config();
const express = require("express");
const handlebars = require("express-handlebars");
const hbs = handlebars.create({});
const router = require("./controller");
const sequelize = require("./config/connection");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

//set the app to use the handlebars engine
app.set("view engine", "handlebars");
// sets handlebars configurations
app.engine("handlebars", hbs.engine);

app.use(express.json());
app.use(router);

runApp();

async function runApp() {
  await sequelize.sync({ force: true });

  const user = await User.create({
    username: "test",
    password: "testtest",
  });

  app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
  });
}
