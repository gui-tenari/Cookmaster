const UserServices = require('../../Services/User/index');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const token = await UserServices.login(email, password);
  if (token.code) {
    return next(token);
  }
  return res.status(200).json({ token });
};

module.exports = {
  login,
};