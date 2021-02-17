import { AccountModel } from '@/domain/models/account-model';
import { mockAccountModel } from '@/domain/test';
import { AddAccount, AddAccountParams } from '@/domain/usecases';

export default class AddAccountSpy implements AddAccount {
  account = mockAccountModel();

  params: AddAccountParams;

  async add(params: AddAccountParams): Promise<AccountModel> {
    this.params = params;
    return this.account;
  }
}
