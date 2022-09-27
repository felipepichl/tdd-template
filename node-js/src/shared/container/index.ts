import { container } from 'tsyringe';

import '@modules/accounts/providers';
import './providers';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { UsersTokensRepository } from '@modules/accounts/infra/typeorm/repositories/UsersTokensRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { IssuesRepository } from '@modules/issues/infra/typeorm/repositories/IssuesRepository';
import { IIssuesRepository } from '@modules/issues/repositories/IIssuesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository,
);

container.registerSingleton<IIssuesRepository>(
  'IssuesRepository',
  IssuesRepository,
);
