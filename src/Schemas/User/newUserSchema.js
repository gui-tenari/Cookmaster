const Joi = require('joi');

const newUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum(),
});

module.exports = newUserSchema;