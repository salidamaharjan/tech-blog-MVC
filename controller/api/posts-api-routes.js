const router = require("express").Router();
const Post = require("../../models/Post");
const {isAuthenticator} = require('../../middleware/isAuthenticator');


router.post("/posts", isAuthenticator, async (req, res) => {
  console.log("title:", req.body.title);
  console.log("title:", req.body.content);

  try {
    const newPostData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.session.userId,
    });
    res.status(200).json(newPostData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.put("/posts/:id", isAuthenticator, async (req, res) => {
  try {
    console.log("Updating......");
    console.log({ param: req.params });
    console.log(req.body.content);
    const contentUpdate = await Post.update(
      { title: req.body.title, content: req.body.content },
      {
        where: {
          id: parseInt(req.params.id),
          userId: req.session.userId,
        },
      }
    );

    res.status(200).json({ contentUpdate });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/posts/:id", isAuthenticator, async (req, res) => {
  console.log(req.body.id);
  await Post.destroy({
    where: {
      id: req.params.id,
      userId: req.session.userId,
    },
  });
  res.status(200).end();
});

module.exports = router;
