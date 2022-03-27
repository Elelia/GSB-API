const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const DistrictsController = require('../controller/districts.controller');

//get all arrondissements
router.get('/', DistrictsController.getDistrictsList);

module.exports = router;