/* eslint-disable class-methods-use-this */
import SetStorage from '@/data/protocols/cache/set-storage';

export default class LocalStorageAdapter implements SetStorage {
  async set(key: string, value: unknown): Promise<void> {
    localStorage.setItem(key, value as string)
  }
}
