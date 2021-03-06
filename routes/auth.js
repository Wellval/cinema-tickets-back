const { Router } = require('express');
const router = Router();
const authController = require('../controllers/auth');

router.post('/login', authController.login);

router.post('/registration', authController.registration);

router.get('/token', authController.authenticateJWT, authController.refreshToken);

module.exports = router;