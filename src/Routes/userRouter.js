const express = require('express');

const { newUserValidation } = require('../Middlewares/User/index');

const {
  createUser,
} = require('../Controllers/User/index');

const userRouter = express.Router();

userRouter.post('/', newUserValidation, createUser);

module.exports = userRouter;