import { IStorageProvider } from '../models/IStorageProvider';

interface IStorageInMemory {
  file: string;
  folder: string;
}

class StorageProviderInMemory implements IStorageProvider {
  private storage: IStorageInMemory[] = [];

  async saveFile(file: string, folder: string): Promise<string> {
    const path = {
      file,
      folder,
    };

    this.storage.push(path);

    return path.file;
  }
  async deleteFile(file: string, folder: string): Promise<void> {
    const findIndex = this.storage.findIndex(
      path => path.file === folder && path.folder === folder,
    );

    this.storage.splice(findIndex, 1);
  }
}

export { StorageProviderInMemory };
