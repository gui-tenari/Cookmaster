const userModels = require('../../Models/User/index');
const createToken = require('../Token/createToken');

const login = async (insertedEmail, insertedPassword) => {
  const foundUser = await userModels.findUserByEmail(insertedEmail);
  const error = {
    code: 'unauthorized',
    message: 'Incorrect username or password',
  };
  if (!foundUser) {
    return error;
  }
  const { password, email, role, name } = foundUser;
  if (password !== insertedPassword) {
    return error;
  }
  return createToken({ name, email, role });
};

module.exports = {
  login,
};