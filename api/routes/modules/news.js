const express = require('express');

const news = express.Router();

//Controllers
const newsController = require('../../controllers/news');

//Get request
news.get('/', (req, res, next) => {
	return res.status(200).send('Fake News API');
});

//Post request for news
news.post('/', newsController.postNews);

module.exports = news;
