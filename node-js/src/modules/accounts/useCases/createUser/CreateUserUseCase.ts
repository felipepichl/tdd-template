import { IHashProvider } from '@modules/accounts/providers/HashProvider/models/IHashProvider';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/error/AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({ name, email, password }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (user) {
      throw new AppError('Users already exists', 400);
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });
  }
}

export { CreateUserUseCase };
