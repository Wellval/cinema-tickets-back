const { Router } = require('express');
const router = Router();
const hallsController = require('../controllers/timeslots');

router.get('/all/list', hallsController.getTimeslots);
router.get('/:id', hallsController.getTimeslot);

module.exports = router