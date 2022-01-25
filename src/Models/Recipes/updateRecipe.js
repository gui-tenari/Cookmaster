const ObjectId = require('mongodb').ObjectID;

const formatRecipe = require('./Utils/formatRecipe');
const connection = require('../connection');

const updateRecipe = async ({ id, name, ingredients, preparation, userId }) => {
  try {
    const db = await connection();
    await db.collection('recipes').updateOne({ _id: ObjectId(id) }, { $set: {
      name, ingredients, preparation,
    } });
    return formatRecipe({ id, name, ingredients, preparation, userId });
  } catch (error) {
    console.log(error);
  }
};

const updateRecipeWithImage = async ({
   _id: id, name, ingredients, preparation, userId, image, 
  }) => {
  try {
    const db = await connection();
    await db.collection('recipes').updateOne({ _id: ObjectId(id) }, { $set: {
      image,
    } });
    return formatRecipe({ id, name, ingredients, preparation, userId, image });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updateRecipe, updateRecipeWithImage };