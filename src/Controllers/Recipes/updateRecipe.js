const RecipesServices = require('../../Services/Recipes/updateRecipe');

const updateRecipe = async (req, res, next) => {
  const { id } = req.params;
  const insertedData = req.body;
  
  const updatedRecipe = await RecipesServices.updateRecipe(id, insertedData);

  if (updatedRecipe.code) return next(updatedRecipe);

  res.status(200).json(updatedRecipe);
};

module.exports = { updateRecipe };