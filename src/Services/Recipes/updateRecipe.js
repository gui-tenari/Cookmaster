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

const updateRecipeWithImage = async (data) => {
  const { recipeId, userId, role, path } = data;

  const recipe = await validateUserAndRecipe(recipeId, userId, role);
  if (recipe.code) return recipe;
  const url = path.split('cookmaster/')[1];
  recipe.image = `localhost:3000/${url}`;
  console.log(recipe);
  const recipeWithImage = await RecipesModels.updateRecipeWithImage(recipe);
  return recipeWithImage;
};

module.exports = { updateRecipe, updateRecipeWithImage };