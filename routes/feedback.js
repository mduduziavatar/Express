const express = require('express');

let router = express.Router();

module.exports = function (params) {
  let { feedbackService } = params;

  router.get('/', async function (request, response) {
    let feedback = await feedbackService.getList();
    return response.json(feedback);
  });

  router.post('/', function (request, response) {
    return response.send('Feedback form posted');
  });

  return router;
};
