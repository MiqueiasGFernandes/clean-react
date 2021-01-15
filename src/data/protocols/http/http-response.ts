export enum HttpStatusCode {
  unthorized = 401,
  noContent = 204,
  badRequest = 400,
  forbidden = 403,
  ok = 200,
  serverError = 500,
  notFound = 404,
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T //eslint-disable-line
}
