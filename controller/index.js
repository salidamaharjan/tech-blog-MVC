const router = require('express').Router();
const homeRoute = require('./home-routes');
const loginRoute = require('./login-routes');
const postsRoute = require('./posts-routes');
const dashboardRoute = require('./dashboard-routes');
const createPostRoute = require('./createPost-route');
const apiRoute = require('./api');

router.use(homeRoute);
router.use(loginRoute);
router.use(apiRoute);
router.use(createPostRoute);
router.use(postsRoute);
router.use(dashboardRoute);

module.exports = router;
