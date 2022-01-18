const express = require('express');

const recipeValidation = require('../Middlewares/Recipes/recipeValidation');

const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
} = require('../Controllers/Recipes/index');

const recipesRouter = express.Router();

recipesRouter.get('/', getAllRecipes);
recipesRouter.post('/', recipeValidation, createRecipe);

recipesRouter.get('/:id', getRecipeById);

module.exports = recipesRouter;