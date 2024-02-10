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
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  console.log("req.body",req.body);
  try {
    const userLogin = await User.findOne({
      where: {
        username: req.body.username,
        // password: req.body.password,
      },
    });
    console.log("userLogin", userLogin);
    if(!userLogin) {
      req.status(401).json({message: 'Incorrect email or password. Please try again!'});
      return;
    };

    const validatePassword = userLogin.checkPassword(req.body.password);

    if(!validatePassword) {
      res.status(401).json({message: 'Incorrect email or password. Please try again!'});
      return;
    };
    res.status(200).json({message: 'You are logged in'});
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
