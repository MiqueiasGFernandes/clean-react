import { InvalidFieldError } from '@/validation/errors';
import FieldValidation from '@/validation/protocols/field-validation';

export default class EmailValidation implements FieldValidation {
  public readonly field: string;

  private emailRegexFormatt = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(field: string) {
    this.field = field;
  }

  validate(value: string): Error {
    return this.emailRegexFormatt.test(value) ? null : new InvalidFieldError();
  }
}
