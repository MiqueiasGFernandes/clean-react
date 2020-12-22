export default class InvalidFieldError extends Error {
  constructor() {
    super('Campo inválido');
  }
}
