import { authenticateRoutes } from '@modules/accounts/infra/http/routes/authenticate.routes';
import { usersRouter } from '@modules/accounts/infra/http/routes/users.routes';
import { Router } from 'express';

const router = Router();

router.use('/users', usersRouter);

router.use(authenticateRoutes);

export { router };
