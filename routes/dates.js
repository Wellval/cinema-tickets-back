const { Router } = require('express');
const router = Router();
const datesController = require('../controllers/dates');

router.get('/all/list', datesController.getDates);
router.get('/:id', datesController.getDate);

module.exports = router