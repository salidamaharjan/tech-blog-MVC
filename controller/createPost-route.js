const router = require("express").Router();

router.get("/posts/create", (req, res) => {
  res.render("create", {
    username: req.session.username,
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
