const express = require('express');

const recipeValidation = require('../Middlewares/Recipes/recipeValidation');

const {
  createRecipe,
  getAllRecipes,
} = require('../Controllers/Recipes/index');

const recipesRouter = express.Router();

recipesRouter.get('/', getAllRecipes);
recipesRouter.post('/', recipeValidation, createRecipe);

module.exports = recipesRouter;