const connection = require('../connection');

const formatNewUser = ({ insertedId, name, email, role }) => ({
  name,
  email,
  role,
  _id: insertedId,
  });

const findUserByEmail = async (email) => {
  try {
    const db = await connection();
    const foundUser = await db.collection('users').findOne({ email });
    return foundUser;
  } catch (error) {
    const { message } = error;
    console.log(error, message);
  }
};

const createUser = async (name, email, password, role = 'user') => {
  try {
    const db = await connection();
    const { insertedId } = await db.collection('users').insertOne({ name, email, password, role });
    return formatNewUser({ insertedId, name, email, role });
  } catch (error) {
    const { message } = error;
    console.log(error, message);
  }
};

module.exports = {
  createUser,
  findUserByEmail,
};