const express = require('express');
const newsApp = express();
const newsRoutes = require('../routes/modules/news');

newsApp.use('/news', newsRoutes);

module.exports = newsApp;