import { HttpPostClient } from '../../protocols/http/http-post-client';

export default class RemoteAuthentication {
  private readonly url: string;

  private readonly httpPostClient: HttpPostClient;

  constructor(url: string, httpPostClient: HttpPostClient) {
    this.url = url;
    this.httpPostClient = httpPostClient;
  }

  async auth(): Promise<void> {
    await this.httpPostClient.post({ url: this.url });
  }
}
