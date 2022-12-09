import { uploadConfig } from '@config/upload';
import fs from 'fs';
import { resolve } from 'path';

import { IStorageProvider } from '../models/IStorageProvider';

class DiskStorageProvider implements IStorageProvider {
  async saveFile(file: string, folder: string): Promise<string> {
    await fs.promises.rename(
      resolve(uploadConfig.tempFolder, file),
      resolve(`${uploadConfig.tempFolder}/${folder}`, file),
    );

    return file;
  }
  async deleteFile(file: string, folder: string): Promise<void> {
    const filePath = resolve(`${uploadConfig.tempFolder}/${folder}`, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

export { DiskStorageProvider };
