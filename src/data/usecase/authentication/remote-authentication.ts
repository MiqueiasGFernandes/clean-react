import { HttpPostClient } from '@/data/protocols/http/http-post-client';
import { HttpStatusCode } from '@/data/protocols/http/http-response';
import InvalidCredentialsError from '@/domain/error/invalid-credentials-error';
import UnexpectedError from '@/domain/error/unexpected-error';
import { AccountModel } from '@/domain/models/account-model';
import { AuthenticationParams } from '@/domain/usecases/authentication';

export default class RemoteAuthentication {
  private readonly url: string;

  private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>;

  constructor(url: string, httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>) {
    this.url = url;
    this.httpPostClient = httpPostClient;
  }

  // eslint-disable-next-line
  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        Promise.resolve();
        break;
      case HttpStatusCode.unthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}