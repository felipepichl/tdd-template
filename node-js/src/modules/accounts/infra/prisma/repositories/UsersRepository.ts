import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { PrismaClient, User } from '@prisma/client';

class UsersRepository implements IUsersRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(data: ICreateUserDTO): Promise<void> {
    await this.prisma.user.create({
      data,
    });
  }

  async findByEmail(email: string): Promise<User> {
    const result = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    return result;
  }

  async findById(user_id: string): Promise<User> {
    const result = await this.prisma.user.findUnique({
      where: {
        id: user_id,
      },
    });

    return result;
  }
}

export { UsersRepository };
