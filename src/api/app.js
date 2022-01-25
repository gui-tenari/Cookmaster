const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userRouter = require('../Routes/userRouter');
const loginRouter = require('../Routes/loginRouter');
const recipesRouter = require('../Routes/recipesRouter');
const errorHandler = require('../Middlewares/errorHandler');

const app = express();

app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/recipes', recipesRouter);
app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

app.use(errorHandler);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
