import faker from 'faker';
import FieldValidationSpy from '../../test/mock-field-validation';
import ValidationComposite from './validation-composite';

type SutTypes = {
  sut: ValidationComposite,
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (): SutTypes => {
  const fieldValidationsSpy = [
    new FieldValidationSpy('any_field'),
    new FieldValidationSpy('any_field'),
  ];
  const sut = ValidationComposite.build(fieldValidationsSpy);
  return {
    sut,
    fieldValidationsSpy,
  };
};

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const { sut, fieldValidationsSpy } = makeSut();
    const errorMessage = faker.random.words();
    fieldValidationsSpy[0].error = new Error(errorMessage);
    fieldValidationsSpy[1].error = new Error(errorMessage);
    const error = sut.validate('any_field', errorMessage);
    expect(error).toBe(errorMessage);
  });
  test('Should not return error if any validation fails', () => {
    const { sut } = makeSut();
    const error = sut.validate('any_field', 'any_value');
    expect(error).toBeFalsy();
  });
});
