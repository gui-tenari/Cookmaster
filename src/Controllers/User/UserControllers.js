const UserServices = require('../../Services/User/UserServices');

const createUser = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const user = await UserServices.createUser(name, email, password, role);
  if (user.code) {
    return next(user);
  }
  return res.status(201).json({ user });
};

module.exports = {
  createUser,
};