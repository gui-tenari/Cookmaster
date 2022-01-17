const connection = require('../connection');

const formatNewUser = ({ insertedId, name, email, role }) => ({
  name,
  email,
  role,
  _id: insertedId,
  });

const createUser = async (name, email, password, role = 'user') => {
  try {
    const db = await connection();
    const { insertedId } = await db.collection('users').insertOne({ name, email, password, role });
    return formatNewUser({ insertedId, name, email, role });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
};