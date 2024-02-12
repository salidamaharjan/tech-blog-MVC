const router = require("express").Router();
const User = require("../../models/User");

router.post("/signup", async (req, res) => {
  try {
    // const data = req.body;
    // console.log(data);
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.loggedIn = true;
      req.session.username = newUser.username;
      res.status(200).json({ message: "You are logged in" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  console.log("req.body", req.body);
  try {
    const userLogin = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    console.log("userLogin", userLogin);
    if (!userLogin) {
      req
        .status(401)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validatePassword = userLogin.checkPassword(req.body.password);

    if (!validatePassword) {
      res
        .status(401)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.userId = userLogin.id;
      req.session.loggedIn = true;
      req.session.username = userLogin.username;
      res.status(200).json({ message: "You are logged in" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.status(200).end();
  });
});

module.exports = router;
