import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http';
import { EmailInUseError } from '@/domain/error';
import { AccountModel } from '@/domain/models';
import { AddAccount, AddAccountParams, AuthenticationParams } from '@/domain/usecases';

export default class RemoteAddAccount implements AddAccount {
  private readonly url: string

  private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>

  constructor(url: string, httpPostClient: HttpPostClient<AddAccountParams, AccountModel>) {
    this.url = url;
    this.httpPostClient = httpPostClient;
  }

  async add(params: AddAccountParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.forbidden: throw new EmailInUseError();
      default: break;
    }
    return null;
  }
}
