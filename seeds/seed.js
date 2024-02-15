require("dotenv").config();
const { User, Post, Comments } = require("../models/index");
const sequelize = require("../config/connection");

runApp();

async function runApp() {
  await sequelize.sync({ force: true });

  const user = await User.create({
    username: "user1",
    password: "password1",
  });
  const user2 = await User.create({
    username: "user2",
    password: "password2",
  });
  const post1 = await Post.create({
    userId: user.id,
    title: "Greeting",
    content: "hello",
  });
  const post2 = await Post.create({
    userId: user.id,
    title: "Food",
    content: "MoMo",
  });
  const post3 = await Post.create({
    userId: user2.id,
    title: "Post3",
    content: "Hey hey",
  });
  const post4 = await Post.create({
    userId: user2.id,
    title: "Post4",
    content: "Namaste",
  });

  const comment1 = await Comments.create({
    userId: user.id,
    postId: post1.id,
    commentText: "Jojoloppa",
  });

  const comment2 = await Comments.create({
    userId: user2.id,
    postId: post1.id,
    commentText: "Hi",
  });

  const comment3 = await Comments.create({
    userId: user.id,
    postId: post2.id,
    commentText: "I love MoMo",
  });

  const comment4 = await Comments.create({
    userId: user2.id,
    postId: post2.id,
    commentText: "MoMo is life",
  });
  sequelize.close();
}
