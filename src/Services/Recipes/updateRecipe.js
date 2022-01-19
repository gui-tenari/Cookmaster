const RecipesModels = require('../../Models/Recipes/index');

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
    return true;
  }
  return { 
    code: 'unauthorized',
    message: 'you\'re not authorized',
   };
};

const updateRecipe = async (recipeId, data) => {
  const { name, preparation, ingredients, userId, role } = data;

  const userAuthorization = await validateUserAndRecipe(recipeId, userId, role);
  if (userAuthorization.code) return userAuthorization;

  const newRecipeinfos = { 
    id: recipeId,
    name,
    ingredients,
    preparation,
    userId,
  };
  
  const updatedRecipe = await RecipesModels.updateRecipe(newRecipeinfos);

  return updatedRecipe;
};

module.exports = { updateRecipe };