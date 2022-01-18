const RecipesServices = require('../../Services/Recipes/index');

const getAllRecipes = async (req, res, next) => {
  const recipes = await RecipesServices.getAllRecipes();
  if (!recipes) {
    return next({
      code: 'serverError',
      message: 'Internal Error',
    });
  }
  res.status(200).json(recipes);
};

const getRecipeById = async (req, res, next) => {
  const { id } = req.params;
  const recipe = await RecipesServices.getRecipeById(id);
  if (recipe.code) {
    return next(recipe);
  }
  return res.status(200).json(recipe);
};

module.exports = {
  getAllRecipes,
  getRecipeById,
};