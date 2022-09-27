import { Router } from 'express';

import { authenticateRoutes } from '@modules/accounts/infra/http/routes/authenticate.routes';
import { usersRouter } from '@modules/accounts/infra/http/routes/users.routes';
import { issuesRouter } from '@modules/issues/infra/http/routes/issues.routes';

const router = Router();

router.use('/users', usersRouter);

router.use(authenticateRoutes);
router.use('/issues', issuesRouter);

export { router };
