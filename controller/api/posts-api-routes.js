const router = require("express").Router();
const Post = require("../../models/Post");

router.put("/posts/:id", async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.status(401).end();
      return;
    }
    console.log("Updating......");
    console.log({ param: req.params });
    console.log(req.body.content);
    const contentUpdate = await Post.update(
      { title: req.body.title, content: req.body.content },
      {
        where: {
          id: parseInt(req.params.id),
        },
      }
    );
    // req.params.title = contentUpdate.title;
    // req.params.content = contentUpdate.content;
    // res.status(200).json({message: "Updated"});
    res.status(200).json({ contentUpdate });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
