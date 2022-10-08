import { UserTokens as IUserTokens } from '@prisma/client';

class UserTokens implements IUserTokens {
  id: string;
  refresh_token: string;
  expires_date: Date;
  created_at: Date;
  fk_user_id: string;
}

export { UserTokens };
