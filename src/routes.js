import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();
routes.get('/', (req,res) => { res.render('index') })
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.put('/users', UserController.update);
// routes.delete('/user/:id', UserController.delete);

export default routes;
