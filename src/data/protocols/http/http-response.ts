export enum HttpStatusCode {
  unthorized = 401,
  noContent = 204
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any //eslint-disable-line
}
