import FieldValidation from '@/validation/protocols/field-validation';
import { EmailValidation } from '..';
import MinLengthValidation from '../min-length/min-length-validation';
import RequiredFieldValidation from '../required-field/required-field-validation';

/* eslint-disable no-useless-constructor */
export default class ValidationBuilder {
  private readonly fieldName: string

  private readonly validations: FieldValidation[]

  private constructor(fieldName: string, validations: FieldValidation[]) {
    this.fieldName = fieldName;
    this.validations = validations;
  }

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, []);
  }

  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName));
    return this;
  }

  email(): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName));
    return this;
  }

  min(length: number): ValidationBuilder {
    this.validations.push(new MinLengthValidation(this.fieldName, length));
    return this;
  }

  build(): FieldValidation[] {
    return this.validations;
  }
}
