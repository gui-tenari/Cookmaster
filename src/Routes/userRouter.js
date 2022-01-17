const express = require('express');

const newUSerValidation = require('../Middlewares/User/newUserValidation');

const {
  createUser,
} = require('../Controllers/User/UserControllers');

const userRouter = express.Router();

userRouter.post('/', newUSerValidation, createUser);

module.exports = userRouter;