const router = require("express").Router();
const { isAuthenticator } = require("../middleware/isAuthenticator");

router.get("/posts/create", isAuthenticator, (req, res) => {
  res.render("create", {
    username: req.session.username,
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
