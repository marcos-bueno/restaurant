exports.up = knex => knex.schema.createTable('menus', table => {
    table.increments('id').primary();
    table.varchar('photo').notNullable();
    table.varchar('title').notNullable();
    table.varchar('description').notNullable();
    table.float('price').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
  
  exports.down = knex => knex.schema.dropTable('menus');