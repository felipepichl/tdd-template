import { IDateProvider } from '../models/IDateProvider';

class DateProviderInMemory implements IDateProvider {
  addDays(days: number): Date {
    return new Date(days);
  }
}

export { DateProviderInMemory };
