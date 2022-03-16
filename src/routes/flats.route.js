const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const FlatsController = require('../controller/flats.controller');

//get all utilisateurs
router.get('/', FlatsController.getFlatsList);

module.exports = router;