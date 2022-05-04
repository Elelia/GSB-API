const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const RequestsController = require('../controller/requests.controller');

//get all requests
router.get('/', RequestsController.getRequestsList);

//get last request
router.get('/last/', RequestsController.getRequestLast);

//get last request
router.get('/:num', RequestsController.getRequestsListByNumeroBuyer);

//create new request
router.post('/', RequestsController.createNewRequest);

//create new concern
router.post('/concerner/', RequestsController.createNewConcern);

//get requests by type
router.get('/:type', RequestsController.getRequestsListByType);

module.exports = router;