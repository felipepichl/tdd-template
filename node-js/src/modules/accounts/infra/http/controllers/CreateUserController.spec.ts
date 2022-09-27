import request from 'supertest';

import { app } from '@shared/infra/http/start/app';
import { AppDataSource } from '@shared/infra/typeorm';

describe('Create User Controller', () => {
  beforeEach(async () => {
    await AppDataSource.initialize();
    await AppDataSource.runMigrations();
  });

  afterAll(async () => {
    await AppDataSource.dropDatabase();
  });

  it('should be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      name: 'John Due',
      email: 'john.due@example.com',
      password: 'hash_123',
    });

    expect(response.status).toBe(201);
  });
});
