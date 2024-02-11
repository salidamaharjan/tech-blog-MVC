const router = require("express").Router();
const { User, Post } = require("../models/index");

router.get("/", async (req, res) => {
  const allPost = await Post.findAll({
    attributes: ["title", "id"],
    include: {
      model: User,
      attributes: ["id", "username"],
    },
  });
  const posts = allPost.map((post) => post.get({ plain: true }));
  console.log("posts", posts);
  res.render("homepage", {
    posts: posts,
    username: req.session.username,
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
