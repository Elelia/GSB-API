const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const UsersController = require('../controller/users.controller');

//get all utilisateurs
router.get('/', UsersController.getUsersList);

//rajouter le get by id
router.get('/:id', UsersController.getUserById);

//get by login & mdp
router.get('/:login/:mdp', UsersController.getUserByLoginMdp);

//update one user
router.put('/update/:num', UsersController.updateUserInfo);

module.exports = router;