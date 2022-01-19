const RecipeServices = require('../../Services/Recipes/deleteRecipe');

const deleteRecipe = async (req, res, next) => {
  const { id } = req.params;
  const { userId, role } = req.body;

  const deletedRecipe = await RecipeServices.deleteRecipe(id, userId, role);

  if (deletedRecipe.code) return next(deletedRecipe);
  return res.status(204).json();
};

module.exports = { deleteRecipe };