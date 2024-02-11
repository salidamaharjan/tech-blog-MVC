const router = require('express').Router();
const homeRoute = require('./home-routes');
const loginRoute = require('./login-routes');
const postsRoute = require('./posts-routes');
const apiRoute = require('./api');

router.use(homeRoute);
router.use(loginRoute);
router.use(apiRoute);
router.use(postsRoute);

module.exports = router;
