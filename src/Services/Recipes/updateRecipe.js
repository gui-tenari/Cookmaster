const RecipesModels = require('../../Models/Recipes/index');
const validateUserAndRecipe = require('./Utils/validateUserAndRecipe');

const updateRecipe = async (recipeId, data) => {
  const { name, preparation, ingredients, userId, role } = data;

  const userAuthorization = await validateUserAndRecipe(recipeId, userId, role);
  if (userAuthorization.code) return userAuthorization;

  const newRecipeinfos = { 
    id: recipeId,
    name,
    ingredients,
    preparation,
    userId,
  };
  
  const updatedRecipe = await RecipesModels.updateRecipe(newRecipeinfos);

  return updatedRecipe;
};

module.exports = { updateRecipe };