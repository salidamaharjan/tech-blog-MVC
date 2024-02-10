const router = require('express').Router();
const loginApiRoute = require('./login-api-routes');

router.use('/api', loginApiRoute);

module.exports = router;