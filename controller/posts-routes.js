const router = require("express").Router();
const { Post, User } = require("../models");

router.get("/posts/:id", async (req, res) => {
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
  res.render("single-post", {
    post: post,
  });
});

module.exports = router;
