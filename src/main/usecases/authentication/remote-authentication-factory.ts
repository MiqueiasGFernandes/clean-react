import RemoteAuthentication from '@/data/usecase/authentication/remote-authentication';
import { Authentication } from '@/domain/usecases';
import { makeApiUrl } from '@/main/factories/http/api-factory';
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory';

export const makeRemoteAuthentication = (): Authentication => new RemoteAuthentication(
  makeApiUrl('/login'),
  makeAxiosHttpClient(),
);
