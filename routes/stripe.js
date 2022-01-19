const { Router } = require('express');
const router = Router();
const stripeController = require('../controllers/stripe');
const authController = require('../controllers/auth');

router.post('/add-checkout-session', authController.authenticateJWT, stripeController.addCheckoutSession);

module.exports = router;
