import {
  cleanup, fireEvent, render, RenderResult,
} from '@testing-library/react';
import React from 'react';
import faker from 'faker';
import { Helper, ValidationStub } from '@/presentation/test'
import SignUp from './signUp';

type SutTypes = {
  sut: RenderResult
}

type SutParams = {
  validationError: string
}

const populateField = (sut: RenderResult, fieldName: string, value = faker.random.word()) => {
  const input = sut.getByTestId('email');
  fireEvent.input(input, { target: { value } })
}

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub();
  validationStub.errorMessage = params?.validationError;
  const sut = render(
    <SignUp
      validation={validationStub}
    />,
  );
  return {
    sut,
  };
};

describe('SignUp Component', () => {
  afterEach(cleanup)
  test('Should start with initial state', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    Helper.testChildCount(sut, 'error-wrap', 0);
    Helper.testButtonIsDisabled(sut, 'submit', true);
    Helper.testStatusForField(sut, 'name', validationError);
    Helper.testStatusForField(sut, 'email', validationError);
    Helper.testStatusForField(sut, 'password', 'Campo obrigatório');
    Helper.testStatusForField(sut, 'passwordConfirmation', 'Campo obrigatório');
  });
  test('Should show name error if Validation fails', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    populateField(sut, 'name');
    Helper.testStatusForField(sut, 'name', validationError);
  });
  test('Should show email error if Validation fails', () => {
    const validationError = faker.random.words();
    const { sut } = makeSut({ validationError });
    populateField(sut, 'email');
    Helper.testStatusForField(sut, 'email', validationError);
  });
});
