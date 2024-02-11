require("dotenv").config();
const express = require("express");
const handlebars = require("express-handlebars");
const hbs = handlebars.create({});
const router = require("./controller");
const sequelize = require("./config/connection");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { User, Post } = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 2 * 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
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
  const user2 = await User.create({
    username: "tests",
    password: "testtest",
  });
  const post1 = await Post.create({
    userId: user.id,
    title: "Greeting",
    content: "hello",
  });
  const post2 = await Post.create({
    userId: user.id,
    title: "food",
    content: "MoMo",
  });
  const post3 = await Post.create({
    userId: user2.id,
    title: "user2",
    content: "user2",
  });
  const post4 = await Post.create({
    userId: user2.id,
    title: "user user",
    content: "post4",
  });

  app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
  });
}
