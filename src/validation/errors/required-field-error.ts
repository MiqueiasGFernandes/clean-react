import FieldValidation from '@/validation/protocols/field-validation';

export default class RequiredFieldError extends Error {
  constructor() {
    super('Campo obrigatório');
    this.name = 'RequiredFieldError';
  }
}
