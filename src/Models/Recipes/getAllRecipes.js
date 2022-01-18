const connection = require('../connection');

const getAllRecipes = async () => {
  try {
    const db = await connection();
    const recipes = await db.collection('recipes').find({}).toArray();
    return recipes;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRecipes,
};