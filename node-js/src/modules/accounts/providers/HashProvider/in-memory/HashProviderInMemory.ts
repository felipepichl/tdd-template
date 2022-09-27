import { IHashProvider } from '../models/IHashProvider';

class HashProviderInMemory implements IHashProvider {
  async generateHash(payload: string): Promise<string> {
    return payload;
  }
  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}

export { HashProviderInMemory };
