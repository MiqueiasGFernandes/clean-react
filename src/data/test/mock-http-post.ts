import { AuthenticationParams } from '@/domain/usecases';
import faker from 'faker';
import { HttpPostParams } from '../protocols/http';

export const mockPostRequest = (): HttpPostParams<AuthenticationParams> => ({
  url: faker.internet.url(),
  body: {
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
});
