const UsersModels = require('../../Models/User/UserModels');

const createUser = async (name, email, password, role) => {
  const foundUser = await UsersModels.findUserByEmail(email);
  console.log(foundUser);
  if (foundUser) {
    return {
      code: 'conflictData',
      message: 'Email already registered',
    };
  } 
  const newUser = await UsersModels.createUser(name, email, password, role);
  return newUser;
};

module.exports = {
  createUser,
};