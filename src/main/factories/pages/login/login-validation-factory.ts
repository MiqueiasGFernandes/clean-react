import { ValidationComposite } from '@/validation/validators';
import ValidationBuilder from '@/validation/validators/builder/validation-builder';

export const makeLoginValidation = (): ValidationComposite => ValidationComposite.build([
  ...ValidationBuilder.field('email').email().required().build(),
  ...ValidationBuilder.field('email').min(6).required().build(),
]);
