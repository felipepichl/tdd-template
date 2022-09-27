import { DataSource } from 'typeorm';

import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { UserTokens } from '@modules/accounts/infra/typeorm/entities/UserTokens';
import { Issue } from '@modules/issues/infra/typeorm/entities/Issue';

const database = {
  dev: './src/shared/infra/typeorm/database.sqlite',
  test: './src/shared/infra/typeorm/database_test.sqlite',
};

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.NODE_ENV === 'test' ? database.test : database.dev,
  entities: [User, UserTokens, Issue],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized');
  })
  .catch(err => console.log(err));

export { AppDataSource };

/**
 * yarn typeorm migration:create src/shared/infra/typeorm/migrations/Name
 * yarn typeorm migration:run -d src/shared/infra/typeorm
 */

/**
 *  "migration:run": "ts-node-dev ./node_modules/typeorm/cli.js migration:run",
    "migration:create": "ts-node-dev ./node_modules/typeorm/cli.js migration:create",
    "entity:create": "ts-node-dev ./node_modules/typeorm/cli.js entity:create",
 */
