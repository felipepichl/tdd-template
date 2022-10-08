import { UserTokens } from '@prisma/client';

import { ICreateUserTokensDTO } from '../dtos/ICreateUserTokensDTO';

interface IUsersTokensRepository {
  create(data: ICreateUserTokensDTO): Promise<UserTokens>;
  findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<UserTokens>;
  deleteById(id: string): Promise<void>;
}

export { IUsersTokensRepository };
