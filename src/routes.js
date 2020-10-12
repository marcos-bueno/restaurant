import { Router } from 'express';

const routes = new Router();

import IndexController from './controllers/IndexController';

import UserController from './controllers/UserController';

import DashboardController from './controllers/DashboardController';

import ReservationController from './controllers/ReservationController';

import ContactsController from './controllers/ContactsController';

routes.get('/', IndexController.index);

routes.post('/', IndexController.create);

routes.get('/dashboard', DashboardController.index);

routes.get('/dashboard/reservas', ReservationController.index);

routes.post('/dashboard/reservas', ReservationController.create);

routes.put('/dashboard/reservas/:id', ReservationController.update);

routes.delete('/dashboard/reservas/:id', ReservationController.delete);

routes.get('/dashboard/usuarios', UserController.index);

routes.post('/dashboard/usuarios', UserController.create);

routes.put('/dashboard/usuarios/:id', UserController.update);

routes.delete('/dashboard/usuarios/:id', UserController.delete);

routes.get('/contato', ContactsController.index);

routes.post('/contato', ContactsController.create);


routes.get('/menu', (request, response) => {
  return response.render('pages/menu');
});

routes.get('/servicos', (request, response) => {
  return response.render('pages/services');
});

routes.get('/faca-sua-reserva', (request, response) => {
  return response.render('pages/reservation');
});

routes.get('/login', (request, response) => {
  return response.render('pages/login');
});

routes.get('/dashboard/menu', (request, response) => {
  return response.render('pages/admin/menus');
});

routes.get('/dashboard/contatos', (request, response) => {
  return response.render('pages/admin/contacts');
});

// routes.get('/dashboard/usuarios', (request, response) => {
//   return response.render('pages/admin/users');
// });

routes.get('/dashboard/emails', (request, response) => {
  return response.render('pages/admin/emails');
});

export default routes;