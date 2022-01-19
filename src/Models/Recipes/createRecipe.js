const connection = require('../connection');
const formatRecipe = require('./Utils/formatRecipe');

const createRecipe = async (name, ingredients, preparation, userId) => {
  try {
    const db = await connection();
    const { insertedId } = await db.collection('recipes')
      .insertOne({ name, ingredients, preparation, userId });
      return formatRecipe({ insertedId, name, ingredients, preparation, userId });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createRecipe };