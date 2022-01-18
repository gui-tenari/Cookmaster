const RecipesServices = require('../../Services/Recipes/index');

const createRecipe = async (req, res, next) => {
  const insertedRecipe = req.body;
  const token = req.headers.authorization;
  const recipe = await RecipesServices.createRecipe(token, insertedRecipe);
  if (recipe.code) {
    return next(recipe);
  }
  res.status(201).json({ recipe });
};

module.exports = { createRecipe };