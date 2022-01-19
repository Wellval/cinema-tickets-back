const { Router } = require('express');
const router = Router();
const timeslotsController = require('../controllers/timeslots');
const authController = require('../controllers/auth');

router.get('/all/list', timeslotsController.getTimeslots);
router.get('/:id', timeslotsController.getTimeslot);
router.post('/all/add', authController.authenticateJWT, authController.isAdmin, timeslotsController.addTimeslot);

module.exports = router