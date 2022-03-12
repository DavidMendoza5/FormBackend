const { Router } = require('express');
const userController = require('../controllers/user.controller');
const middleware = require('../middlewares/index');
const userValidation = require('../middlewares/user.validation');

const api = Router();

api.post('/users', [middleware.validateData(userValidation.create, 'body')], userController.createUser);

module.exports = api;