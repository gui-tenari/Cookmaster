const express = require('express');

const { loginValidation } = require('../Middlewares/User/index');

const {
  login,
} = require('../Controllers/User/index');

const loginRouter = express.Router();

loginRouter.post('/', loginValidation, login);

module.exports = loginRouter;