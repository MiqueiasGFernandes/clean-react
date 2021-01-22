import { InvalidFieldError } from '@/validation/errors';
import FieldValidation from '@/validation/protocols/field-validation';

export class CompareFieldsValidation implements FieldValidation {
  public readonly field: string;

  private readonly valueToCompare: string

  constructor(field: string, valueToCompare: string) {
    this.field = field;
    this.valueToCompare = valueToCompare;
  }

  validate(value: string): Error {
    return value !== this.valueToCompare ? new InvalidFieldError() : null;
  }
}
