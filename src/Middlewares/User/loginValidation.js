const loginSchema = require('../../Schemas/User/loginSchema');

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next({
      code: 'unauthorized',
      message: 'All fields must be filled',
    });
  }

  const isValid = loginSchema.validate({ email, password });
  if (isValid.error) {
    return next({
      code: 'unauthorized',
      message: 'Incorrect username or password',
    });
  }
  return next();
};

module.exports = loginValidation;