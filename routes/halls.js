const { Router } = require('express');
const router = Router();
const hallsController = require('../controllers/halls');

router.get('/all/list', hallsController.getHalls);
router.get('/:id', hallsController.getHall);

module.exports = router