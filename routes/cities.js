const { Router } = require('express');
const router = Router();
const citiesController = require('../controllers/cities');

router.get('/all/list', citiesController.getCities);
router.get('/:id', citiesController.getCity);


module.exports = router