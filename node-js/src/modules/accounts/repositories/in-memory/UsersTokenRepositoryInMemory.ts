import { ICreateUserTokensDTO } from '@modules/accounts/dtos/ICreateUserTokensDTO';
import { UserTokens } from '@modules/accounts/infra/prisma/models/UserTokens';

import { IUsersTokensRepository } from '../IUsersTokensRepository';

class UsersTokenRepositoryInMemory implements IUsersTokensRepository {
  private userTokens: UserTokens[] = [];

  async create({
    user_id,
    refresh_token,
    expires_date,
  }: ICreateUserTokensDTO): Promise<UserTokens> {
    const userTokens = new UserTokens();

    Object.assign(userTokens, { user_id, refresh_token, expires_date });

    this.userTokens.push(userTokens);

    return userTokens;
  }
  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<UserTokens> {
    return this.userTokens.find(
      userToken =>
        userToken.fk_user_id === user_id &&
        userToken.refresh_token === refresh_token,
    );
  }
  async deleteById(id: string): Promise<void> {
    const index = this.userTokens.findIndex(userToken => userToken.id === id);

    this.userTokens.slice(index);
  }
}

export { UsersTokenRepositoryInMemory };
