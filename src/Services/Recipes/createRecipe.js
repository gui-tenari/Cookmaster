const RecipeModels = require('../../Models/Recipes/index');
const UserModels = require('../../Models/User/findUser');
const decodeToken = require('../Token/decodeToken');

const createRecipe = async (token, recipe) => {
  const userEmail = decodeToken(token);
  if (userEmail.code) return userEmail;

  const { _id: id } = await UserModels.findUserByEmail(userEmail);
  const { name, ingredients, preparation } = recipe;
  const newRecipe = await RecipeModels.createRecipe(name, ingredients, preparation, id);
  return newRecipe;
};

module.exports = {
  createRecipe,
};