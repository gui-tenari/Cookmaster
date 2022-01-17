const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('../Routes/userRouter');
const loginRouter = require('../Routes/loginRouter');
const errorHandler = require('../Middlewares/errorHandler');

const app = express();

app.use(bodyParser.json());

app.use('/users', userRouter);
app.use('/login', loginRouter);

app.use(errorHandler);

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

module.exports = app;
