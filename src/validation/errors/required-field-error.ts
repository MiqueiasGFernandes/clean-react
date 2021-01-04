import FieldValidation from '@/validation/protocols/field-validation';

export default class RequiredFieldError extends Error implements FieldValidation {
  private error: Error;

  constructor() {
    super('Campo obrigatório');
    this.name = 'RequiredFieldError';
  }

  field: string;

  validate(): Error {
    this.error = new Error('Method not implemented.');
    return this.error;
  }
}
