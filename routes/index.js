const express = require('express');
const router = express.Router();
const moviesRoutes = require('./movies'); 
const cinemasRoutes = require('./cinemas')
const usersRoutes = require('./users');
const authRoutes = require('./auth') // пример файла

router.use('/movie', moviesRoutes); 
router.use('/cinema', cinemasRoutes);
router.use('/user', usersRoutes);
router.use('/auth', authRoutes) // пример подключения
// по аналогии подключение нужных роутов к нужным файлам

module.exports = router;