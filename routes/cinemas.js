const { Router } = require('express');
const router = Router();
const cinemasController = require('../controllers/cinemas');

router.get('/all/list', cinemasController.getCinemas);
router.get('/:id', cinemasController.getCinema);


module.exports = router