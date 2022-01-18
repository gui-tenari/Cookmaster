const newRecipeSchema = require('../../Schemas/Recipes/newRecipeSchema');

const recipeValidation = (req, res, next) => {
  const recipe = req.body;
  const isValid = newRecipeSchema.validate(recipe);
  if (isValid.error) {
    return next({
      code: 'invalidData',
      message: 'Invalid entries. Try again.',
    });
  }
  next();
};

module.exports = recipeValidation;