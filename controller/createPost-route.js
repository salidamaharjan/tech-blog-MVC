const router = require('express').Router();

router.get("/posts/create", (req, res) => {
    res.render("create");
})

module.exports = router;