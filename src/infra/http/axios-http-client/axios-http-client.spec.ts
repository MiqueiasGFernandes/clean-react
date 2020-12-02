import axios from 'axios';
import { mockAxios } from '@/infra/test';
import { mockPostRequest } from '@/data/test/mock-http-post';
import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();
  return {
    sut,
    mockedAxios,
  };
};

describe('AxiosHttpClient', () => {
  test('Should call Axios with correct values', async () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });
  test('Should return correct status code and body', () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();
    const promise = sut.post(request);
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value);
  });
});
