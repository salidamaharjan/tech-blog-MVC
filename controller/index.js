const router = require('express').Router();
const homeRoute = require('./home-routes');
const loginRoute = require('./login-routes');
const apiRoute = require('./api');

router.use(homeRoute);
router.use(loginRoute);
router.use(apiRoute);

module.exports = router;
