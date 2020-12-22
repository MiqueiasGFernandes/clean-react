import { InvalidFieldError } from '@/validation/errors';
import FieldValidation from '@/validation/protocols/field-validation';

export default class EmailValidation implements FieldValidation {
  public readonly field: string;

  private invalidFieldError: InvalidFieldError;

  constructor(field: string) {
    this.field = field;
  }

  validate(value: string): Error {
    this.invalidFieldError = new InvalidFieldError();
    return this.invalidFieldError;
  }
}
