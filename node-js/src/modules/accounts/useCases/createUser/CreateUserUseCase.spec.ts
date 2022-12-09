import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { HashProviderInMemory } from '@modules/accounts/providers/HashProvider/in-memory/HashProviderInMemory';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';

import { AppError } from '@shared/error/AppError';

import { CreateUserUseCase } from './CreateUserUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let hashProviderInMemory: HashProviderInMemory;
let createUserUseCase: CreateUserUseCase;
let user: ICreateUserDTO;

describe('Create a user', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    hashProviderInMemory = new HashProviderInMemory();
    createUserUseCase = new CreateUserUseCase(
      usersRepositoryInMemory,
      hashProviderInMemory,
    );

    user = {
      name: 'John Due',
      email: 'jonhdue@example.com',
      password: 'hsh123',
    };
  });

  it('should be able to create a new user', async () => {
    await createUserUseCase.execute(user);

    const { email } = user;

    const userCreated = await usersRepositoryInMemory.findByEmail(email);

    expect(userCreated).toHaveProperty('id');
  });

  it('should not be able to create a new user with same email another', async () => {
    await createUserUseCase.execute(user);

    await expect(createUserUseCase.execute(user)).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
