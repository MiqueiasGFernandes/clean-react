import SetStorage from '@/data/protocols/cache/set-storage';
import { SaveAccessToken } from '@/domain/usecases/';

export default class LocalSaveAccessToken implements SaveAccessToken {
  private readonly setStorage: SetStorage;

  constructor(setStorage: SetStorage) {
    this.setStorage = setStorage;
  }

  async save(accessToken: string): Promise<void> {
    await this.setStorage.set('accessToken', accessToken);
  }
}
