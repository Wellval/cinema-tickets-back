const { Router } = require('express');
const router = Router();
const seatsController = require('../controllers/seats');

router.get('/all/list', seatsController.getSeats);

module.exports = router;
