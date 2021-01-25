import { InvalidFieldError, RequiredFieldError } from '@/validation/errors';
import faker from 'faker';
import { CompareFieldsValidation } from './compare-fields-validation';

function makeSut(valueToCompare: string): CompareFieldsValidation {
  return new CompareFieldsValidation(faker.database.column(), valueToCompare)
}
describe('CompareFieldsValidation', () => {
  test('Should return error if compare is invalid', () => {
    const sut = makeSut(faker.random.word());
    const error = sut.validate('');
    expect(error).toEqual(new InvalidFieldError());
  });
  test('Should return falsy if compare is valid', () => {
    const valueToCompare = faker.random.word();
    const sut = makeSut(valueToCompare);
    const error = sut.validate(valueToCompare);
    expect(error).toBeFalsy();
  });
});