import Validation from '@/presentation/protocols/validation';
import FieldValidation from '@/validation/protocols/field-validation';

export default class ValidationComposite implements Validation {
  private readonly validators: FieldValidation[];

  private constructor(validators: FieldValidation[]) {
    this.validators = validators;
  }

  static build(validators: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validators);
  }

  validate(fieldName: string, fieldValue: string): string {
    const validators = this.validators.filter((v) => v.field === fieldName);
    let error;
    validators.forEach((validator) => {
      const validateError = validator.validate(fieldValue);
      if (validateError) {
        error = validateError.message;
      }
    });
    return error;
  }
}
