const { Router } = require('express');
const router = Router();
const sessionsController = require('../controllers/sessions');
const authController = require('../controllers/auth');

router.get('/all/list', sessionsController.getSessions);
router.get('/:movieId', sessionsController.getMovieSessions);
router.delete('/:id', authController.authenticateJWT, sessionsController.deleteSession);
router.post('/all/add', authController.authenticateJWT, sessionsController.createSession);

module.exports = router;