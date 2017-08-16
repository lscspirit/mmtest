
exports.up = function(knex, Promise) {
  return knex.schema.createTable('products', t => {
    t.increments('id').primary();
    t.string('uid', 10).unique().notNullable();
    t.integer('brand_id').unsigned().notNullable().references('id').inTable('brands');
    t.string('name').notNullable();
    t.text('desc').notNullable();
    t.decimal('price').unsigned().notNullable();
    t.string('color', 16).notNullable();
    t.specificType('status', 'tinyint(1)').unsigned().notNullable();
    t.timestamps(false, true);

    // Indexes
    t.index('uid', 'idx_product_uids');
    t.index('brand_id', 'idx_product_brand_ids');
    t.index('name', 'idx_product_names');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
