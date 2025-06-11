const express = require('express');
const raizControllers = require('./controllers/raizControllers');
const userControllers = require('./controllers/userControllers');
const exerControllers = require('./controllers/exerControllers');
const authorization = require('./middleware/authorization');

const routes = express.Router();

routes.get('/',raizControllers.raiz);
routes.get('/user', authorization , userControllers.searchUsersAll);
routes.post('/user',userControllers.create);
routes.post('/userauth', userControllers.searcherUser);
routes.put('/user/:codcli', userControllers.updateClient);

// Rotas de exercícios
routes.post('/exercicios', exerControllers.create);
routes.get('/exercicios' , exerControllers.searchExercicios);
routes.delete('/exercicios/:codexer', exerControllers.deleteExercicios);
routes.put('/exercicios/:codexer', exerControllers.updateExercicios);

module.exports = routes;