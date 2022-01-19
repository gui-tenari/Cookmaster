const express = require('express');

const recipeValidation = require('../Middlewares/Recipes/recipeValidation');
const tokenValidation = require('../Middlewares/Recipes/tokenValidation');

const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
} = require('../Controllers/Recipes/index');

const recipesRouter = express.Router();

recipesRouter.get('/', getAllRecipes);
recipesRouter.post('/', recipeValidation, createRecipe);

recipesRouter.get('/:id', getRecipeById);
recipesRouter.put('/:id', tokenValidation, updateRecipe);

module.exports = recipesRouter;