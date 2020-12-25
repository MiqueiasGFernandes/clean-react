import { InvalidFieldError } from '@/validation/errors';
import FieldValidation from '@/validation/protocols/field-validation';

export default class MinLengthValidation implements FieldValidation {
  public readonly field;

  private minLength;

  private value;

  constructor(field: string, minLength: number) {
    this.field = field;
    this.minLength = minLength;
  }

  validate(value: string): Error {
    this.value = value;
    return new InvalidFieldError();
  }
}
