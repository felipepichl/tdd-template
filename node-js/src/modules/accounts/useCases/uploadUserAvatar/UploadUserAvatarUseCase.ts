import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { injectable, inject } from 'tsyringe';

import { IStorageProvider } from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import { AppError } from '@shared/error/AppError';

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UploadUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('Only authenticated can change avatar', 401);
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar, 'avatar');
    }

    const filename = await this.storageProvider.saveFile(avatar_file, 'avatar');

    user.avatar = filename;

    await this.usersRepository.create(user);
  }
}

export { UploadUserAvatarUseCase };
