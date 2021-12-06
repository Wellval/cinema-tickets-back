const { Router } = require('express');
const router = Router();
const usersController = require('../controllers/users')

router.get('/all/list', usersController.getUsers);

module.exports = router;