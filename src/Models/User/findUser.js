const connection = require('../connection');

const findUserByEmail = async (email) => {
  try {
    const db = await connection();
    const foundUser = await db.collection('users').findOne({ email });
    return foundUser;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  findUserByEmail,
};