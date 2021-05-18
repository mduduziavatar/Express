const express = require('express');

const router = express.Router();

module.exports = function () {
  router.get('/', function (request, response) {
    return response.send('Speakers List');
  });

  router.get('/:shortname', function (request, response) {
    return response.send(`Detail page of ${request.params.shortname}`);
  });

  return router;
};
