import request from 'supertest';

import { app } from '@shared/infra/http/start/app';

describe('[E2E] = Create User', () => {
  it('should be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      name: 'John Due',
      email: 'john.due@example.com',
      password: 'hash_123',
    });

    expect(response.status).toBe(201);
  });
});
