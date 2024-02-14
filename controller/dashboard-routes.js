const router = require('express').Router();
const {Post} = require('../models');
const { isAuthenticator} = require('../middleware/isAuthenticator');

router.get('/dashboard', isAuthenticator, async(req, res) => {
    const allPost = await Post.findAll({
        where: {
            userId : req.session.userId,
        }
    });
    const posts = allPost.map((post) => post.get({plain: true}));
    res.render('dashboard', {
        posts: posts,
        username: req.session.username,
        loggedIn: req.session.loggedIn, 
    });
});

module.exports = router;