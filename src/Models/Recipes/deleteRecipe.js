const ObjectId = require('mongodb').ObjectID;
const connection = require('../connection');

const deleteRecipe = async (id) => {
  try {
    const db = await connection();
    await db.collection('recipes').deleteOne({ _id: ObjectId(id) });
    return {};
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  deleteRecipe,
};