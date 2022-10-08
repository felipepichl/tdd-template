import { User } from '@prisma/client';

import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(user_id: string): Promise<User>;
}

export { IUsersRepository };
