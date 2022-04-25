const { Router } = require('express');

const router = Router();

router.use(require('./users.route'));

router.all('*', (req, res) => res.render('404'));

module.exports = router;
