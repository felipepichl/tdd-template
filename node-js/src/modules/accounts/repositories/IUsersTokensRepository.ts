import { ICreateUserTokensDTO } from '../dtos/ICreateUserTokensDTO';

interface IUsersTokensRepository<T> {
  create(data: ICreateUserTokensDTO): Promise<T>;
  findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<T>;
  deleteById(id: string): Promise<void>;
}

export { IUsersTokensRepository };
