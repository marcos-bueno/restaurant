const bcrypt = require('bcryptjs');

const password = 'admin';

const hash = bcrypt.hashSync(password, 10);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          name: 'admin',
          email: 'admin@restaurante.com',
          password: hash
        }
      ]);
    });
};
