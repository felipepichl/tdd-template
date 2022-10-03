import { ICreateUserTokensDTO } from '@modules/accounts/dtos/ICreateUserTokensDTO';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { PrismaClient, UserTokens } from '@prisma/client';

class UsersTokensRepository implements IUsersTokensRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({
    refresh_token,
    expires_date,
    user_id,
  }: ICreateUserTokensDTO): Promise<UserTokens> {
    const result = await this.prisma.userTokens.create({
      data: {
        refresh_token,
        expires_date,
        fk_user_id: user_id,
      },
    });

    return result;
  }
  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<UserTokens> {
    const result = await this.prisma.userTokens.findFirst({
      where: { fk_user_id: user_id, refresh_token },
    });

    return result;
  }
  async deleteById(id: string): Promise<void> {
    await this.prisma.userTokens.delete({
      where: { id },
    });
  }
}

export { UsersTokensRepository };
