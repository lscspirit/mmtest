
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary();
    t.string('uid', 10).unique().notNullable();
    t.specificType('type', 'tinyint(1)').unsigned().notNullable();
    t.string('name').notNullable();
    t.string('email').unique().notNullable();
    t.date('dob').notNullable();
    t.timestamps(false, true);

    // Indexes
    t.index('uid', 'idx_user_uids');
    t.index('email', 'idx_user_emails');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
