import { uploadConfig } from '@config/upload';
import { CreateUserController } from '@modules/accounts/infra/http/controllers/createUser/CreateUserController';
import { UploadUserAvatarController } from '@modules/accounts/useCases/uploadUserAvatar/UploadUserAvatarController';
import { Router } from 'express';
import multer from 'multer';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

const usersRouter = Router();

const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const uploadUserAvatarController = new UploadUserAvatarController();

usersRouter.post('', createUserController.handle);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  uploadUserAvatarController.handle,
);

export { usersRouter };
