import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { Users } from '@prisma/client';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<Users>;
  findById(user_id: string): Promise<Users>;
}

export { IUsersRepository };
