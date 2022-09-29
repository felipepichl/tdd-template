import { PrismaClient } from '@prisma/client';

class User {
  constructor(private readonly prismaUser: PrismaClient['users']) {}
}

export { User };
