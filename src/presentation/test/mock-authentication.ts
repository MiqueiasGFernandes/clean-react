import { Authentication, AuthenticationParams } from '@/domain/usecases';
import { AccountModel } from '@/domain/models/account-model';
import { mockAccountModel } from '@/domain/test';

export default class AuthenticationSpy implements Authentication {
  account = mockAccountModel();

  params: AuthenticationParams;

  callsCount = 0;

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    this.params = params;
    this.callsCount += 1;
    return Promise.resolve(this.account);
  }
}
