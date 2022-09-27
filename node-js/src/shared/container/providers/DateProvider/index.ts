import { container } from 'tsyringe';

import { DayjsDateProvider } from './implementations/DayjsDateProvider';
import { IDateProvider } from './model/IDateProvider';

container.registerSingleton<IDateProvider>('DateProvider', DayjsDateProvider);
