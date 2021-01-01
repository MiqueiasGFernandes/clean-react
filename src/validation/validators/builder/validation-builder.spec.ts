import faker from 'faker';
import { EmailValidation } from '..';
import MinLengthValidation from '../min-length/min-length-validation';
import RequiredFieldValidation from '../required-field/required-field-validation';
import ValidationBuilder from './validation-builder';

describe('ValidationBuilder', () => {
  test('Should return required field validation', () => {
    const validations = ValidationBuilder.field('any_field').required().build();
    expect(validations).toEqual([new RequiredFieldValidation('any_field')]);
  });
  test('Should return EmailValidation', () => {
    const validations = ValidationBuilder.field('any_field').email().build();
    expect(validations).toEqual([new EmailValidation('any_field')]);
  });
  test('Should return MinLengthValidation', () => {
    const validations = ValidationBuilder.field('any_field').min(5).build();
    expect(validations).toEqual([new MinLengthValidation('any_field', 5)]);
  });
  test('Should return a list of validations', () => {
    const field = faker.database.column();
    const length = faker.random.number();
    const validations = ValidationBuilder.field(field)
      .required()
      .email()
      .min(length)
      .build();
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new EmailValidation(field),
      new MinLengthValidation(field, length),
    ]);
  });
});
