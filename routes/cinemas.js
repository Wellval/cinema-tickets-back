const { Router } = require('express');
const router = Router();
const cinemasController = require('../controllers/cinemas');
const authController = require('../controllers/auth');

router.get('/all/list', cinemasController.getCinemas);
router.get('/:id', cinemasController.getCinema);
router.post('/all/add', authController.authenticateJWT, authController.isAdmin, cinemasController.addCinema);

module.exports = router