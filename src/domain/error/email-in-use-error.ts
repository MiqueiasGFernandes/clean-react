export class EmailInUseError extends Error {
  constructor() {
    super('Credenciais inválidas');
    this.name = 'EmailInUseError';
  }
}
