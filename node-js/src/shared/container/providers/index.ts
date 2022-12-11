import { container } from 'tsyringe';

import { DayjsDateProvider } from './DateProvider/implementations/DayjsDateProvider';
import { IDateProvider } from './DateProvider/models/IDateProvider';
import { DiskStorageProvider } from './StorageProvider/implementations/DiskStorageProvider';
import { IStorageProvider } from './StorageProvider/models/IStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IDateProvider>('DateProvider', DayjsDateProvider);
