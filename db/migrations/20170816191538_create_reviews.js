
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', t => {
    t.increments('id').primary();
    t.string('uid', 10).unique().notNullable();
    t.integer('user_id').unsigned().notNullable().references('id').inTable('users');
    t.integer('product_id').unsigned().notNullable().references('id').inTable('products');
    t.specificType('rating', 'tinyint(1)').unsigned().notNullable();
    t.text('comment').notNullable();
    t.timestamps(false, true);

    // Indexes
    t.index('uid', 'idx_review_uids');
    t.index('user_id', 'idx_review_user_ids');
    t.index('product_id', 'idx_review_product_ids');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
