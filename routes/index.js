const express = require('express');

let speakersRoute = require('./speakers');
let feedbackRoute = require('./feedback');

let router = express.Router();

module.exports = function (params) {
  router.get('/', function (request, response) {

    if(!request.session.visitCount){
        request.session.visitCount = 0;
    }
    request.session.visitCount += 1
    console.log(`Number of visits ${request.session.visitCount}`);
    //getting the index to display as home
    response.render('pages/index', { pageTitle: 'Siphiwe' });
  });

  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));
  return router;
};
