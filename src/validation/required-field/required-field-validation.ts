import FieldValidation from '@/validation/protocols/field-validation';
import { RequiredFieldError } from '@/validation/errors';

export default class RequiredFieldValidation implements FieldValidation {
  public readonly field: string

  constructor(field: string) {
    this.field = field;
  }

  // eslint-disable-next-line
  public validate(value: string): Error {
    return value ? null : new RequiredFieldError();
  }
}
