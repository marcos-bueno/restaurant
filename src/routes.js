import { Router } from 'express';

import multer from 'multer';

import uploadConfig from './config/multer';

const routes = new Router();

const upload = multer(uploadConfig);

import authMiddleware from './middlewares/auth';

import guestMiddleware from './middlewares/guest';

import IndexController from './controllers/IndexController';

import UserController from './controllers/UserController';

import DashboardController from './controllers/DashboardController';

import ReservationController from './controllers/ReservationController';

import ContactController from './controllers/ContactController';

import DashContactsController from './controllers/DashContactsController';

import DashMenuController from './controllers/DashMenuController';

import SessionController from './controllers/SessionController';

routes.use((request, response, next) => {
  response.locals.flashSuccess = request.flash('success');
  response.locals.flashError = request.flash('error');

  return next();
});

routes.get('/', IndexController.index);

routes.post('/', IndexController.create);

routes.use('/dashboard', authMiddleware);

routes.get('/dashboard', DashboardController.index);

routes.get('/dashboard/logout', SessionController.destroy);

routes.get('/dashboard/reservas', ReservationController.index);

routes.post('/dashboard/reservas', ReservationController.create);

routes.put('/dashboard/reservas/:id', ReservationController.update);

routes.delete('/dashboard/reservas/:id', ReservationController.delete);

routes.get('/dashboard/usuarios', UserController.index);

routes.post('/dashboard/usuarios', UserController.create);

routes.put('/dashboard/usuarios/:id', UserController.update);

routes.delete('/dashboard/usuarios/:id', UserController.delete);

routes.get('/contato', ContactController.index);

routes.post('/contato', ContactController.create);

routes.get('/dashboard/contatos', DashContactsController.index);

routes.delete('/dashboard/contatos/:id', DashContactsController.delete);

routes.get('/dashboard/menu', DashMenuController.index);

routes.post('/dashboard/menu', upload.single('photo'), DashMenuController.create);

routes.put('/dashboard/menu/:id', upload.single('photo'), DashMenuController.update);

routes.delete('/dashboard/menu/:id', DashMenuController.delete);

routes.get('/login', guestMiddleware, SessionController.index);

routes.post('/login', SessionController.store);

export default routes;