const express = require('express');
const router = express.Router();
const moviesRoutes = require('./movies'); 
const cinemasRoutes = require('./cinemas')
const usersRoutes = require('./users');
const authRoutes = require('./auth');
const sessionsRoutes = require('./sessions');
const citiesRoutes = require('./cities');
const hallsRoutes = require('./halls');
const timeslotsRoutes = require('./timeslots');
const datesRoutes = require('./dates');
const seatsRoutes = require('./seats');
const stripeRoutes = require('./stripe');


router.use('/movie', moviesRoutes); 
router.use('/cinema', cinemasRoutes);
router.use('/user', usersRoutes);
router.use('/auth', authRoutes);
router.use('/session', sessionsRoutes);
router.use('/city', citiesRoutes);
router.use('/hall', hallsRoutes);
router.use('/timeslot', timeslotsRoutes);
router.use('/date', datesRoutes);
router.use('/seat', seatsRoutes);
router.use('/stripe', stripeRoutes);

module.exports = router;