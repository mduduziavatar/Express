const express = require('express');

let router = express.Router();

module.exports = function () {
  router.get('/', function (request, response) {
    return response.send('Feedback page');
  });

  router.post('/', function (request, response) {
    return response.send('Feedback form posted');
  });

  return router;
};
