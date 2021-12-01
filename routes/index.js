const express = require('express');
const router = express.Router();
const moviesRoutes = require('./movies'); 
const cinemasRoutes = require('./cinemas') // пример файла

router.use('/movie', moviesRoutes); 
router.use('/cinema', cinemasRoutes); // пример подключения
// по аналогии подключение нужных роутов к нужным файлам

module.exports = router;