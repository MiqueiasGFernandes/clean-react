import FieldValidation from '@/validation/protocols/field-validation';

export default class RequiredFieldError extends Error implements FieldValidation {
  constructor() {
    super('Campo obrigatório');
    this.name = 'RequiredFieldError';
  }

  field: string;

  validate(value: string): Error {
    throw new Error('Method not implemented.');
  }
}
