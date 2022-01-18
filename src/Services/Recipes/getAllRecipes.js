const RecipesModels = require('../../Models/Recipes/index');

const getAllRecipes = async () => {
  const recipes = await RecipesModels.getAllRecipes();
  return recipes;
};

module.exports = {
  getAllRecipes,
};