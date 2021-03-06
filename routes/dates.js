const { Router } = require('express');
const router = Router();
const datesController = require('../controllers/dates');

router.get('/all/list', datesController.getDates);
router.get('/:id', datesController.getDate);
router.post('/all/add', datesController.addDate);

module.exports = router