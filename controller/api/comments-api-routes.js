const router = require("express").Router();
const { Comments } = require("../../models");

router.post("/posts/:id/comments", async (req, res) => {
  try {
    const newComment = await Comments.create({
      commentText: req.body.commentText,
      postId: req.params.id,
      userId: req.session.userId,
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
