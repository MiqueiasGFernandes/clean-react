import SetStorage from '../protocols/cache/set-storage';

export default class SetStorageSpy implements SetStorage {
  public key: string;

  public value: unknown;

  async set(key: string, value: unknown): Promise<void> {
    this.key = key;
    this.value = value;
  }
}
