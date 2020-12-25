import { InvalidFieldError } from '@/validation/errors';
import FieldValidation from '@/validation/protocols/field-validation';

export default class MinLengthValidation implements FieldValidation {
  public readonly field: string;

  private minLength: number;

  private value: string;

  constructor(field: string, minLength: number) {
    this.field = field;
    this.minLength = minLength;
  }

  validate(value: string): Error {
    this.value = value;
    return this.value.length >= this.minLength ? null : new InvalidFieldError();
  }
}
