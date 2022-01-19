const express = require('express');

const recipeValidation = require('../Middlewares/Recipes/recipeValidation');
const tokenValidation = require('../Middlewares/Recipes/authValidation');

const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
} = require('../Controllers/Recipes/index');

const recipesRouter = express.Router();

recipesRouter.get('/', getAllRecipes);
recipesRouter.post('/', recipeValidation, createRecipe);

recipesRouter.get('/:id', getRecipeById);
recipesRouter.put('/:id', tokenValidation, updateRecipe);
recipesRouter.delete('/:id', tokenValidation, deleteRecipe);

module.exports = recipesRouter;