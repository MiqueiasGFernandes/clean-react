import FieldValidation from '@/validation/protocols/field-validation';

export default class FieldValidationSpy implements FieldValidation {
  error: Error = null;

  public field: string;

  constructor(field: string) {
    this.field = field;
  }

  validate(): Error {
    return this.error;
  }
}
