require('dotenv').config();
import express from 'express';
import session from 'express-session';
import flash from 'connect-flash';
import routes from './routes';
import path from 'path';
const LokiStore = require('connect-loki')(session);

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

    this.server.use(flash());

    this.server.use(session({
      store: new LokiStore({
        path: path.resolve(__dirname, '..', 'tmp', 'sessions.db')
      }),
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: true
    }));

    this.server.use((error, request, response, next) => {

      response.status(error.status || 500);
      response.send({ error: error.message });
    });
  }

  views() {
    this.server.set('views', path.join(__dirname, 'views'));
    this.server.set('view engine', 'ejs');
    this.server.use(express.static(path.join(__dirname, '..', 'public')));
    this.server.use(express.static(path.join(__dirname, '..', 'uploads')));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;