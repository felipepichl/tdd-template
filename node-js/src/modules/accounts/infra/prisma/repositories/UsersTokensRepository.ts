import { ICreateUserTokensDTO } from '@modules/accounts/dtos/ICreateUserTokensDTO';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';

import { UserTokens } from '../models/UserTokens';

class UsersTokensRepository implements IUsersTokensRepository {
  create(data: ICreateUserTokensDTO): Promise<UserTokens> {
    throw new Error('Method not implemented.');
  }
  findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<UserTokens> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { UsersTokensRepository };
