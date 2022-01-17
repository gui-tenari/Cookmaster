const newUserSchema = require('../../Schemas/User/newUserSchema');

const newUserValidation = (req, res, next) => {
  const { name, email, password } = req.body;
  const userIsValid = newUserSchema.validate({ name, email, password });
  if (userIsValid.error) {
    return next({
      code: 'invalidData',
      message: 'Invalid entries. Try again.',
    });
  }
  return next();
};

module.exports = newUserValidation;