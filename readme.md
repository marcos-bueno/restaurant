# PA4 - Restaurante

# Schedule

[https://www.notion.so/5a3cd88cb3ed498ba79f6fefa1002e84?v=e746929c977b4eefa4cd95724687b1c3](https://www.notion.so/5a3cd88cb3ed498ba79f6fefa1002e84?v=e746929c977b4eefa4cd95724687b1c3)

## Installation:
  - Install [Yarn](https://classic.yarnpkg.com/en/docs/install) (stable version);
  - Install [Node.js](https://nodejs.org/) (recommended version for most users).
  - Install [Docker](https://www.docker.com/products/docker-desktop) and [pull image](https://hub.docker.com/_/mysql)

Open your favorite Terminal and run these commands:

```sh
$ git clone git@github.com:BrunoGurris/restaurante.git
$ cd restaurante
$ yarn
$ code .
```

Create the .env file at the root of the project and include the environment variables:

```sh
PORT=??? // 3333, 8080...
DB_CLIENT=??? // mysql, postgres...
DB_HOST=??? // 127.0.0.1, localhost...
DB_USER=??? // name of the user that is connected to the database.
DB_PASS=??? // password of the user that is connected to the database.
DB_NAME=??? // name of the database.
```

```sh
$ yarn knex migrate:latest
$ yarn dev
```

## Packages:

| Package | GitHub |
| ------ | ------ |
| express | [https://github.com/expressjs/express][PlExpress] |
| ejs | [https://github.com/mde/ejs][PlEjs] |
| knex | [https://github.com/knex/knex][PlKnex] |
| mysql | [https://github.com/mysqljs/mysql][PlMysql] |
| bcryptjs | [https://github.com/dcodeIO/bcrypt.js][PlBcryptjs] |
| multer | [https://github.com/expressjs/multer][PlMulter] |
| moment | [https://github.com/moment/moment][PlMoment] |
| dotenv | [https://github.com/motdotla/dotenv][PlDotenv] |
| nodemon | [https://github.com/remy/nodemon][PlNodemon] |
| sucrase | [https://github.com/alangpierce/sucrase][PlSucrase] |

   [PlExpress]: <https://github.com/expressjs/express/blob/master/Readme.md>
   [PlEjs]: <https://github.com/mde/ejs>
   [PlKnex]: <https://github.com/knex/knex>
   [PlMysql]: <https://github.com/mysqljs/mysql>
   [PlBcryptjs]: <https://github.com/dcodeIO/bcrypt.js>
   [PlMulter]: <https://github.com/expressjs/multer>
   [PlMoment]: <https://github.com/moment/moment>
   [PlDotenv]: <https://github.com/motdotla/dotenv>
   [PlNodemon]: <https://github.com/remy/nodemon>
   [PlSucrase]: <https://github.com/alangpierce/sucrase>

## References:
[https://medium.com/@fabiojanio/introdu%C3%A7%C3%A3o-ao-node-js-single-thread-event-loop-e-mercado-46edd82c1faf](https://medium.com/@fabiojanio/introdu%C3%A7%C3%A3o-ao-node-js-single-thread-event-loop-e-mercado-46edd82c1faf)

[https://www.youtube.com/playlist?list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B](https://www.youtube.com/playlist?list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B)

[https://www.youtube.com/watch?v=U7GjS3FuSkA](https://www.youtube.com/watch?v=U7GjS3FuSkA)

[https://medium.com/@juniorb2s/migrations-o-porque-e-como-usar-12d98c6d9269](https://medium.com/@juniorb2s/migrations-o-porque-e-como-usar-12d98c6d9269)

[http://expressjs.com/pt-br/](http://expressjs.com/pt-br/)

[http://knexjs.org](http://knexjs.org)

[https://ejs.co](https://ejs.co)

[https://momentjs.com](https://momentjs.com)

[https://www.thetopsites.net/article/55840066.shtml](https://www.thetopsites.net/article/55840066.shtml)

[https://gist.github.com/justsml/2eabeace73b8d25569cca9e0e1cbe8e7](https://gist.github.com/justsml/2eabeace73b8d25569cca9e0e1cbe8e7)

[https://medium.com/@jengopockets/encrypting-seeded-passwords-with-node-js-knex-and-bcrypt-e2efe56f745e](https://medium.com/@jengopockets/encrypting-seeded-passwords-with-node-js-knex-and-bcrypt-e2efe56f745e)