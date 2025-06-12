const express = require('express');
const raizControllers = require('./controllers/raizControllers');
const userControllers = require('./controllers/userControllers');
const exerControllers = require('./controllers/exerControllers');
const authorization = require('./middleware/authorization');
const videoControllers = require('./controllers/videoControllers');

const routes = express.Router();

routes.get('/',raizControllers.raiz);
routes.get('/user', authorization , userControllers.searchUsersAll);
routes.post('/user',userControllers.create);
routes.post('/userauth', userControllers.searcherUser);
routes.put('/user/:codcli', userControllers.updateClient);
routes.delete('/user/:codcli', userControllers.deleteUser);

// Rotas de exercícios
routes.post('/exercicios', exerControllers.create);
routes.get('/exercicios' , exerControllers.searchExercicios);
routes.delete('/exercicios/:codexer', exerControllers.deleteExercicios);
routes.put('/exercicios/:codexer', exerControllers.updateExercicios);

routes.get('/videos' , videoControllers.searchVideos);

module.exports = routes;