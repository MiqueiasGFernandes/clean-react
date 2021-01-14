import { SaveAccessToken } from '@/domain/usecases/';

export default class SaveAccessTokenMock implements SaveAccessToken {
  public accessToken;

  async save(accessToken: string): Promise<void> {
    this.accessToken = accessToken;
  }
}
