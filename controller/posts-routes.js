const router = require("express").Router();
const { Post, User, Comments } = require("../models");

router.get("/posts/:id", async (req, res) => {
  const postById = await Post.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ["id", "username"],
      },
      {
        model: Comments,
        include: [
          {
            model: User,
            attributes: ["id", "username"],
          },
        ],
      },
    ],
  });
  const post = postById.get({ plain: true });
  console.log("post", post);
  res.render("single-post", {
    post: post,
    username: req.session.username,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/posts/:id/edit", async (req, res) => {
  const postById = await Post.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: User,
      attributes: ["id", "username"],
    },
  });
  const post = postById.get({ plain: true });
  res.render("edit-post", {
    post: post,
    username: req.session.username,
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
