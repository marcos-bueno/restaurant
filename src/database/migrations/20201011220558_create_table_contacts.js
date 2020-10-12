exports.up = knex => knex.schema.createTable('contacts', table => {
    table.increments('id').primary();
    table.varchar('name').notNullable();
    table.varchar('email').unique().notNullable();
    table.varchar('message').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
  
  exports.down = knex => knex.schema.dropTable('contacts');