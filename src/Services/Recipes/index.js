const { createRecipe } = require('./createRecipe');
const { getAllRecipes, getRecipeById } = require('./getRecipes');
const { updateRecipe } = require('./updateRecipe');

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
};