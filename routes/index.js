const express = require('express');

let speakersRoute = require('./speakers');
let feedbackRoute = require('./feedback');

let router = express.Router();

module.exports = function () {
  router.get('/', function (request, response) {
    //getting the index to display as home
    response.render('pages/index', { pageTitle: 'Siphiwe' });
  });

  router.use('/speakers', speakersRoute());
  router.use('/feedback', feedbackRoute());
  return router;
};
