const { Router } = require('express');
const router = Router();
const cinemasController = require('../controllers/cinemas');

router.get('/all/list', cinemasController.getCinemas);

module.exports = router