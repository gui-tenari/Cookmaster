const RecipesServices = require('../../Services/Recipes/updateRecipe');

const updateRecipe = async (req, res, next) => {
  const { id } = req.params;
  const insertedData = req.body;
  const { userId, role } = req;

  const data = { ...insertedData, userId, role };
  
  const updatedRecipe = await RecipesServices.updateRecipe(id, data);

  if (updatedRecipe.code) return next(updatedRecipe);

  res.status(200).json(updatedRecipe);
};

const updatedRecipeWithImage = async (req, res, next) => {
  const { id } = req.params;
  const { path } = req.file;
  const { userId, role } = req;
  const updatedRecipe = await RecipesServices.updateRecipeWithImage({
    recipeId: id, path, userId, role,
  });
  if (updatedRecipe.code) {
    return next(updatedRecipe);
  }
  return res.status(200).json(updatedRecipe);
};

module.exports = { updateRecipe, updatedRecipeWithImage };