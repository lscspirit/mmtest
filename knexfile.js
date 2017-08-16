import config from 'config';

const db_config = config.get('db');
module.exports = {
  client: 'mysql',
  connection: {
    host: db_config.host,
    port: db_config.port || 3306,
    user: db_config.user,
    password: db_config.password,
    database: db_config.database
  },
  migrations: {
    tableName: 'migrations',
    directory: `${__dirname}/db/migrations`
  }
};
