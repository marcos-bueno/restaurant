import express from 'express';
import routes from './routes';
import path from 'path';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.views();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    
    this.server.use(express.urlencoded({ extended: false }));

    this.server.use((error, request, response, next) => {

      response.status(error.status || 500);
      response.send({ error: error.message });
    });
  }

  views() {
    this.server.set('views', path.join(__dirname, 'views'));
    this.server.set('view engine', 'ejs');
    this.server.use(express.static(path.join(__dirname, '..', 'public')));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;