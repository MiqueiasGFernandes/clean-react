import axios from 'axios';
import { mockAxios, mockHttpResponse } from '@/infra/test';
import { mockPostRequest } from '@/data/test/mock-http';
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
  test('Should return correct status code and body on failure', () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();
    mockedAxios.post.mockRejectedValue({
      response: mockHttpResponse(),
    });
    const promise = sut.post(request);
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value);
  });
});
