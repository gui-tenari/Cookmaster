const ObjectId = require('mongodb').ObjectID;
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

const getRecipeById = async (id) => {
  const isValid = ObjectId.isValid(id);
  
  if (!isValid) return false;

  try {
    const db = await connection();
    const recipe = db.collection('recipes').findOne({ _id: ObjectId(id) });
    return recipe;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRecipes,
  getRecipeById,
};