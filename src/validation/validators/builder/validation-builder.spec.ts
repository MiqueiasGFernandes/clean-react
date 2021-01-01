import { EmailValidation } from '..';
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
});
