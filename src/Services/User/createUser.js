const userModels = require('../../Models/User/index');

const createUser = async (name, email, password, role) => {
  const foundUser = await userModels.findUserByEmail(email);
  if (foundUser) {
    return {
      code: 'conflictData',
      message: 'Email already registered',
    };
  } 
  const newUser = await userModels.createUser(name, email, password, role);
  return newUser;
};

module.exports = {
  createUser,
};