import faker from 'faker';
import FieldValidationSpy from '../../test/mock-field-validation';
import ValidationComposite from './validation-composite';

type SutTypes = {
  sut: ValidationComposite,
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationsSpy = [
    new FieldValidationSpy('any_field'),
    new FieldValidationSpy('any_field'),
  ];
  const sut = new ValidationComposite(fieldValidationsSpy);
  return {
    sut,
    fieldValidationsSpy,
  };
};

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const fieldName = faker.database.column();
    const { sut, fieldValidationsSpy } = makeSut(fieldName);
    const errorMessage = faker.random.words();
    fieldValidationsSpy[0].error = new Error(errorMessage);
    fieldValidationsSpy[1].error = new Error(errorMessage);
    const error = sut.validate('any_field', errorMessage);
    expect(error).toBe(errorMessage);
  });
  test('Should not return error if any validation fails', () => {
    const fieldName = faker.database.column();
    const { sut } = makeSut(fieldName);
    const error = sut.validate('any_field', 'any_value');
    expect(error).toBeFalsy();
  });
});