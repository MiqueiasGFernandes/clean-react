import { HttpPostClient } from '@/data/protocols/http/http-post-client';
import { HttpStatusCode } from '@/data/protocols/http/http-response';
import InvalidCredentialsError from '@/domain/error/invalid-credentials-error';
import { AuthenticationParams } from '@/domain/usecases/authentication';

export default class RemoteAuthentication {
  private readonly url: string;

  private readonly httpPostClient: HttpPostClient;

  constructor(url: string, httpPostClient: HttpPostClient) {
    this.url = url;
    this.httpPostClient = httpPostClient;
  }

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.unthorized:
        throw new InvalidCredentialsError();
      default:
        return Promise.resolve();
    }
  }
}
