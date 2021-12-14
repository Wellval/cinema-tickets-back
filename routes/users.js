const { Router } = require('express');
const router = Router();
const usersController = require('../controllers/users');
const authController = require('../controllers/auth');

router.get('/me', authController.authenticateJWT, usersController.getMe);

module.exports = router;