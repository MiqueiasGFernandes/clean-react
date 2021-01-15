import { HttpPostClient } from '@/data/protocols/http';
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
    await this.httpPostClient.post({
      url: this.url,
      body: params,
    })
    return null;
  }
}
