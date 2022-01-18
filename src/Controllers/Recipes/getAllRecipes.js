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

module.exports = {
  getAllRecipes,
};