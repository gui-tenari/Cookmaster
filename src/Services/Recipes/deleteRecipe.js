const RecipeModels = require('../../Models/Recipes/deleteRecipe');
const validateUserAndRecipe = require('./Utils/validateUserAndRecipe');

const deleteRecipe = async (recipeId, userId, role) => {
  const userAuthorization = await validateUserAndRecipe(recipeId, userId, role);
  if (userAuthorization.code) return userAuthorization;

  const deletedRecipe = await RecipeModels.deleteRecipe(recipeId);
  return deletedRecipe; 
};

module.exports = {
  deleteRecipe,
};