import { HttpPostParams } from '@/data/protocols/http';
import axios from 'axios';

export class AxiosHttpClient {
  // eslint-disable-next-line
  async post(params: HttpPostParams<unknown>): Promise<void>{
    await axios(params.url);
  }
}
