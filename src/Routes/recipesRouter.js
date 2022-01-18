const express = require('express');

const recipeValidation = require('../Middlewares/Recipes/recipeValidation');

const {
  createRecipe,
} = require('../Controllers/Recipes/index');

const recipesRouter = express.Router();

recipesRouter.post('/', recipeValidation, createRecipe);

module.exports = recipesRouter;