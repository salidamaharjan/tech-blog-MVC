const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage', {
        username: req.session.username,
        loggedIn: req.session.loggedIn,
    });
});

module.exports = router;