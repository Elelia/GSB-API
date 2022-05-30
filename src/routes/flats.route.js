const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const FlatsController = require('../controller/flats.controller');

//get all flats
router.get('/', FlatsController.getFlatsList);

//get flats numéro by id prop
router.get('/posseder/:id', FlatsController.getFlatsListByProp);

//get flats by numéro
router.get('/:num', FlatsController.getFlatsById);

//create new flat
router.post('/', FlatsController.createNewFlat);

module.exports = router;