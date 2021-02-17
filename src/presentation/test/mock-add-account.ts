import { AccountModel } from '@/domain/models/account-model';
import { mockAccountModel } from '@/domain/test';
import { AddAccount, AddAccountParams } from '@/domain/usecases';

export default class AddAccountSpy implements AddAccount {
  account = mockAccountModel();

  params: AddAccountParams;

  callsCount = 0;

  async add(params: AddAccountParams): Promise<AccountModel> {
    this.params = params;
    this.callsCount += 1;
    return this.account;
  }
}
