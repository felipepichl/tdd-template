import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';

interface IUsersRepository<T> {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<T>;
  findById(user_id: string): Promise<T>;
}

export { IUsersRepository };
