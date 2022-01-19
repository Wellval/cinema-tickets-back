const { Router } = require('express');
const router = Router();
const citiesController = require('../controllers/cities');
const authController = require('../controllers/auth');

router.get('/all/list', citiesController.getCities);
router.get('/:id', citiesController.getCity);
router.post('/all/add', authController.authenticateJWT, authController.isAdmin, citiesController.addCity);


module.exports = router