const router = require("express").Router();
const loginApiRoute = require("./login-api-routes");
const postsApiRoute = require("./posts-api-routes");
const commentApiRoute = require("./comments-api-routes");

router.use("/api", loginApiRoute);
router.use("/api", postsApiRoute);
router.use("/api", commentApiRoute);

module.exports = router;
