const router = require('express').Router();

router.post('/signup', (req, res) => {
  const data = req.body;
    console.log(data);
    res.json();
});

module.exports = router;