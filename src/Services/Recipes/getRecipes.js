const RecipesModels = require('../../Models/Recipes/index');

const getAllRecipes = async () => {
  const recipes = await RecipesModels.getAllRecipes();
  return recipes;
};

const getRecipeById = async (id) => {
  const recipe = await RecipesModels.getRecipeById(id);
  if (!recipe || recipe.err) {
    return {
      code: 'notFound',
      message: 'recipe not found',
    };
  }
  return recipe;
};

module.exports = {
  getAllRecipes,
  getRecipeById,
};