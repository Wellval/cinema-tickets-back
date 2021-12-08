const { Router } = require('express');
const router = Router();
const moviesController = require('../controllers/movies');
const authController = require('../controllers/auth')

router.get('/all/list', moviesController.getMovies);

router.get('/:id', moviesController.getMovie);

router.delete('/:id', authController.authenticateJWT, moviesController.deleteMovie);

router.post('/all/add', authController.authenticateJWT, moviesController.createMovie);

router.post('/searched/list', moviesController.searchMovie)

module.exports = router;