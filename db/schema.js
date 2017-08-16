'use strict';

import minimist from 'minimist';
import config from 'config';
import knex from 'knex';

// create database client without specifying a schema
const db_config = config.get('db');
const client = knex({
  client: 'mysql',
  connection: {
    host: db_config.host,
    port: db_config.port || 3306,
    user: db_config.user,
    password: db_config.password
  }
});

// execute script
main();

//
// Methods
//

async function main() {
  const argv = minimist(process.argv);

  let success = false;
  if (argv.create) {
    success = await createDatabase();
  } else if (argv.drop) {
    success = await dropDatabase();
  }

  process.exit(success ? 0 : 1);
}

/**
 * Create the database schema
 * @async
 * @return {Promise<Boolean>} true if creation was successful; false otherwise
 */
async function createDatabase() {
  try {
    await client.raw(`CREATE DATABASE ${db_config.database}`);
    console.log('database created');
    return true;
  } catch(err) {
    console.error('unable to create database');
    console.error(err);
    return false;
  }
}

/**
 * Drop the database schema
 * @async
 * @return {Promise<Boolean>} true if drop was successful; false otherwise
 */
async function dropDatabase() {
  try {
    await client.raw(`DROP DATABASE ${db_config.database}`);
    console.log('database dropped');
    return true;
  } catch(err) {
    console.error('unable to drop database');
    console.error(err);
    return false;
  }
}