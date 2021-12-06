const { Router } = require('express');
const router = Router();
const moviesController =  require('../controllers/movies');

router.get('/all/list', moviesController.getMovies);

router.get('/:id', moviesController.getMovie);

router.delete('/:id', moviesController.deleteMovie);

router.post('/all/add', moviesController.createMovie);

router.get('/all/searched', moviesController.searchMovie)

module.exports = router;