import dayjs from 'dayjs';

import { IDateProvider } from '../model/IDateProvider';

class DayjsDateProvider implements IDateProvider {
  addDays(days: number): Date {
    return dayjs().add(days, 'days').toDate();
  }
}

export { DayjsDateProvider };
