const router = require('express').Router();
const homeRoute = require('./home-routes');
const loginRoute = require('./login-routes');

router.use(homeRoute);
router.use(loginRoute);

module.exports = router;
