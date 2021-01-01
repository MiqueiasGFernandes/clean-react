import { HttpPostClient, HttpPostParams, HttpResponse } from '@/data/protocols/http';
import { AccountModel } from '@/domain/models';
import { AuthenticationParams } from '@/domain/usecases';
import axios from 'axios';

export class AxiosHttpClient implements HttpPostClient<AuthenticationParams, AccountModel> {
  // eslint-disable-next-line
  async post(params: HttpPostParams<AuthenticationParams>): Promise<HttpResponse<AccountModel>> {
    const httpResponse = await axios.post(params.url, params.body);
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data,
    };
  }
}
