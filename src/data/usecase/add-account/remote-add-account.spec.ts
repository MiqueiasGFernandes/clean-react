import { HttpPostClientSpy } from '@/data/test';
import { mockAddAccountParams } from '@/data/test/mock-add-account';
import { AccountModel } from '@/domain/models';
import { AuthenticationParams } from '@/domain/usecases';
import faker from 'faker';
import RemoteAddAccount from './remote-add-account';

type SutTypes = {
  sut: RemoteAddAccount,
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AuthenticationParams, AccountModel>();
  const sut = new RemoteAddAccount(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe('RemoteAddAccount', () => {
  test('Should call HttpClient with correct URL ', async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.add(mockAddAccountParams());
    expect(httpPostClientSpy.url).toBe(url);
  });
});
