const RecipeModels = require('../../Models/Recipes/index');
const UserModels = require('../../Models/User/findUser');
const decodeToken = require('../Token/decodeToken');

const createRecipe = async (token, recipe) => {
  const userInfo = decodeToken(token);
  if (userInfo.code) return userInfo;

  const { _id: id } = await UserModels.findUserByEmail(userInfo.email);
  const { name, ingredients, preparation } = recipe;
  const newRecipe = await RecipeModels.createRecipe(name, ingredients, preparation, id);
  return newRecipe;
};

module.exports = {
  createRecipe,
};