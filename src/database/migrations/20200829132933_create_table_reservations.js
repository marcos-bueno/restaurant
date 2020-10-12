
exports.up = knex => knex.schema.createTable('reservations', table => {
  table.increments('id').primary();
  table.varchar('name').notNullable();
  table.varchar('email').unique().notNullable();
  table.integer('people').notNullable();
  table.date('date').notNullable();
  table.time('time').notNullable();
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('reservations');
