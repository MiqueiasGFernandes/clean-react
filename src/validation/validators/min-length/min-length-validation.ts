import { InvalidFieldError } from '@/validation/errors';
import FieldValidation from '@/validation/protocols/field-validation';

export default class MinLengthValidation implements FieldValidation {
  public readonly field;

  private minLength;

  private fieldValue;

  constructor(field: string, minLength: number) {
    this.field = field;
    this.minLength = minLength;
  }

  validate(fieldValue: string): Error {
    this.fieldValue = fieldValue;
    return new InvalidFieldError();
  }
}
