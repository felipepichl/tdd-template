import express, { Request, Response, NextFunction } from 'express';
import sweggerUi from 'swagger-ui-express';

import { AppError } from '@shared/error/AppError';

import 'express-async-errors';
// import '@shared/infra/typeorm/';
import '@shared/container';

import sweggerFile from '../../../../../swegger.json';
import { router } from '../routes';

const app = express();

app.use(express.json());

app.use('/api-docs', sweggerUi.serve, sweggerUi.setup(sweggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({
      message: `Internal server error ${err.message}`,
    });
  },
);

export { app };
