const { Router } = require('express');
const UserController = require('../controllers/User.controller');

const router = Router();

router.get('/', UserController.findAll);

module.exports = router;
