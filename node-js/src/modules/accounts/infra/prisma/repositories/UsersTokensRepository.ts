import { ICreateUserTokensDTO } from '@modules/accounts/dtos/ICreateUserTokensDTO';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { PrismaClient, UsersTokens } from '@prisma/client';

class UsersTokensRepository implements IUsersTokensRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({
    refresh_token,
    expires_date,
    user_id,
  }: ICreateUserTokensDTO): Promise<UsersTokens> {
    const result = await this.prisma.usersTokens.create({
      data: {
        refresh_token,
        expires_date,
        fk_user_id: user_id,
      },
    });

    return result;
  }
  findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<UsersTokens> {
    throw new Error('Method not implemented.');
  }
  deleteById(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { UsersTokensRepository };
