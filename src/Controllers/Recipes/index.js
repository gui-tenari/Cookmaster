const { createRecipe } = require('./createRecipe');
const { getAllRecipes, getRecipeById } = require('./getRecipes');
const { updateRecipe } = require('./updateRecipe');
const { deleteRecipe } = require('./deleteRecipe');

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};