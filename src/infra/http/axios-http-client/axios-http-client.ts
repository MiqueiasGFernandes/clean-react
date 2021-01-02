import { HttpPostClient, HttpPostParams, HttpResponse } from '@/data/protocols/http';
import { AccountModel } from '@/domain/models';
import { AuthenticationParams } from '@/domain/usecases';
import axios, { AxiosResponse } from 'axios';

export class AxiosHttpClient implements HttpPostClient<AuthenticationParams, AccountModel> {
  private httpResponse: AxiosResponse;

  async post(params: HttpPostParams<AuthenticationParams>): Promise<HttpResponse<AccountModel>> {
    try {
      this.httpResponse = await axios.post(params.url, params.body);
      return {
        statusCode: this.httpResponse.status,
        body: this.httpResponse.data,
      };
    } catch (error) {
      this.httpResponse = error.responde;
      return {
        statusCode: this.httpResponse.status,
        body: this.httpResponse.data,
      };
    }
  }
}
