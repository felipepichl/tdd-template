import { v4 as uuid } from 'uuid';

import { User } from './User';

class UserTokens {
  readonly id: string;

  refresh_token: string;

  user_id: string;

  user: User;

  expires_date: Date;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { UserTokens };
