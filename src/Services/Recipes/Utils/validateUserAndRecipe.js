const RecipesModels = require('../../../Models/Recipes/index');

const validateUserAndRecipe = async (recipeId, userId, role) => {
  // Receita existe 
  const recipe = await RecipesModels.getRecipeById(recipeId);
  if (!recipe || recipe.err) {
    return {
      code: 'notFound',
      message: 'recipe not found',
    };
  }
  // user é autorizado
  if (userId === `${recipe.userId}` || role === 'admin') {
    return recipe;
  }
  return { 
    code: 'unauthorized',
    message: 'you\'re not authorized',
   };
};

module.exports = validateUserAndRecipe;