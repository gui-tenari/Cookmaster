const express = require('express');
const multer = require('multer');

const multerConfig = require('../../multer.config');

const recipeValidation = require('../Middlewares/Recipes/recipeValidation');
const tokenValidation = require('../Middlewares/Recipes/authValidation');

const {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  updatedRecipeWithImage,
  deleteRecipe,
} = require('../Controllers/Recipes/index');

const recipesRouter = express.Router();

recipesRouter.get('/', getAllRecipes);
recipesRouter.get('/:id', getRecipeById);

recipesRouter.post('/', recipeValidation, createRecipe);

recipesRouter.put('/:id', tokenValidation, updateRecipe);
recipesRouter.put('/:id/image/',
  tokenValidation, 
  multer(multerConfig).single('image'),
  updatedRecipeWithImage);
  
recipesRouter.delete('/:id', tokenValidation, deleteRecipe);

module.exports = recipesRouter;