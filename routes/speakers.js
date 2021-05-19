const express = require('express');

const router = express.Router();

module.exports = function (params) {
  let { speakerService } = params;

  router.get('/', async function (request, response) {
    let speakers = await speakerService.getList();
    return response.json(speakers);
  });

  router.get('/:shortname', function (request, response) {
    return response.send(`Detail page of ${request.params.shortname}`);
  });

  return router;
};
