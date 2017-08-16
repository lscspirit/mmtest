
exports.up = function(knex, Promise) {
  return knex.schema.createTable('brands', t => {
    t.increments('id').primary();
    t.string('uid', 10).unique().notNullable();
    t.string('name').notNullable();
    t.text('desc').notNullable();
    t.timestamps(false, true);

    // Indexes
    t.index('uid', 'idx_brand_uids');
    t.index('name', 'idx_brand_names');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('brands');
};
