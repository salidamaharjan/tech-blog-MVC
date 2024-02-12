const router = require('express').Router();
const loginApiRoute = require('./login-api-routes');
const postsApiRoute = require('./posts-api-routes')

router.use('/api', loginApiRoute);
router.use('/api', postsApiRoute);

module.exports = router;