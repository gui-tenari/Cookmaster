const connection = require('../connection');

const formatNewRepice = ({ insertedId, name, ingredients, preparation, userId }) => ({
  name,
  ingredients,
  preparation,
  userId,
  _id: insertedId,
  });

const createRecipe = async (name, ingredients, preparation, userId) => {
  try {
    const db = await connection();
    const { insertedId } = await db.collection('recipes')
      .insertOne({ name, ingredients, preparation, userId });
      return formatNewRepice({ insertedId, name, ingredients, preparation, userId });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createRecipe };