import { v4 as uuid } from 'uuid';

class User {
  readonly id: string;

  name: string;

  email: string;

  password: string;

  avatar: string;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
